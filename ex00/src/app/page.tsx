// 'use client'

import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Feed {
  id: number
  img_url: string
  place: string
  description: string
}

export default async function Home() {
  // const [feed, setFeed] = useState<Feed[]>([])

  // useEffect(() => {
  await axios.get('http://localhost:5000/feed').then((res) => {
    console.log(res.data)
    // setFeed(res.data)
  })
  // }, [])

  // console.log('fdd', feed)
  return <></>
}
