import React from 'react'
import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading...';
    //console.log(videos)
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>

            {videos.map((vid, index) => (
                < Box key={index} >

                    {vid.video?.videoId && <VideoCard video={vid.video} />}
                    {vid.channel?.channelId && <ChannelCard channelDetail={vid.channel} />}
                </Box>
            ))
            }
        </Stack >
    )
}


export default Videos