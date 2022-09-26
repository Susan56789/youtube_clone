import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video }) => {
    // console.log(video)
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={video?.thumbnails[0]?.url || demoThumbnailUrl}
                    alt={video?.title || demoVideoTitle}
                    sx={{ height: 180, width: { xs: '100%', sm: '358px', md: '320px' } }}
                />
            </Link>
            <CardContent
                sx={{ backgroundColor: '#1e1e1e', height: '150px' }}>
                <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {video?.title.slice(0, 100) || demoVideoTitle.slice(0, 100)}
                    </Typography>
                </Link>
                <Link to={video.author?.channelId?.id ? `/channel/${video.author?.channelId?.id}` : demoChannelUrl}>

                    {video?.author?.title && (
                        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                            {video?.author?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                        </Typography>
                    )
                    }

                    {video?.stats?.views && (
                        <Typography variant='subtitle2' color='gray'>
                            {video?.stats?.views && parseInt(video.stats?.views).toLocaleString()} views . {video?.publishedTimeText}
                        </Typography>
                    )}

                    {video?.stats?.viewers && (
                        <Typography variant='subtitle2' color='gray'>
                            {video?.stats?.viewers && parseInt(video.stats?.viewers).toLocaleString()} watching . {video?.badges[0]}
                        </Typography>
                    )}

                </Link>
            </CardContent>

        </Card>
    )
}

export default VideoCard