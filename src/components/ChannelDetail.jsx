import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const { id } = useParams()  //use params to get the id from the url

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  //console.log(channelDetail)
  //console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channel/details/?part=snippet&id=${id}`)
      .then(
        (res) => (
          setChannelDetail(res.data)
        )
      ).catch((err) => {  //catch any error
        console.log(err)  //log the error   
      })
    fetchFromAPI(`channel/videos/?id=${id} &part=snippet & order=date `)
      .then(
        (res) => (
          setVideos(res.data?.contents)
        )
      ).catch((err) => {  //catch any error
        console.log(err)  //log the error   
      })


  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div

          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />

      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />

      </Box>
    </Box>
  )
}

export default ChannelDetail