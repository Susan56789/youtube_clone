import React from 'react'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    //console.log(channelDetail)
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { md: '320px', xs: '356px' },
                height: '326px',
                margin: 'auto',
                marginTop: marginTop
            }}
        >
            <Link to={`/channel/${channelDetail?.channelId}`} >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia
                        image={channelDetail?.avatar[0]?.url || demoProfilePicture}
                        alt={channelDetail?.title}
                        sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                    />
                    <Typography variant='h5' fontWeight='bold' color='#fff'>
                        {channelDetail?.title.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channelDetail?.stats?.subscribers && (
                        <>
                            <Typography variant='h7' color='gray'>

                                {parseInt(channelDetail.stats?.subscribers).toLocaleString()} Subscribers
                            </Typography>
                        </>
                    )}
                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard