import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'


const VideoDetail = () => {

  const { id } = useParams()

  const [VideoDetail, setVideoDetail] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)


  useEffect(() => {
    fetchFromAPI(`video/details/?part=snippet,statistics&id=${id}`)

      .then(res => (
        setVideoDetail(res.data)
      )
      ).catch((err) => console.log(err))

    fetchFromAPI(`video/related-contents/?part=snippet,statistics&id=${id}`)

      .then(res => (
        setRelatedVideos(res.data.contents)
      )).catch((err) => console.log(err))
  }, [id])
  //console.log(relatedVideos)
  //console.log(VideoDetail)

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', positon: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube/watch?v=${id}`} className='react-player' controls />
            <Typography variant='h5' color='#fff' fontWeight='bold' p={2}>
              {VideoDetail?.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`channel/${VideoDetail?.author?.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {VideoDetail?.author?.title}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', lm: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(VideoDetail?.stats?.views).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(VideoDetail?.stats?.likes).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>

    </Box>


  )
}

export default VideoDetail