import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video }) => {

    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
                <CardMedia
                    image={video?.thumbnails[0]?.url || demoThumbnailUrl}
                    alt={video?.title || demoVideoTitle}
                    sx={{ height: 180, width: 358 }}
                />
            </Link>
            <CardContent
                sx={{ backgroundColor: '#1e1e1e', height: '100px' }}>
                <Link to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={video.author.channelId ? `/channel/${video.author.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {video?.author.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>

        </Card>
    )
}

export default VideoCard