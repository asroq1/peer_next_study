'use client'

import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const page = (props: any) => {
  const feedStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '14px',
    maxWidth: '300px',
    margin: '10px',
    borderRadius: '8px',
  }

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  }
  //swr

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    `http://localhost:4000/feed/${props.params.id}`,
    fetcher,
  )

  if (isLoading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  console.log('propr', props)
  return (
    <>
      <h2>Detail {props.params.id}</h2>
      <Stack sx={feedStyle}>
        <Box>{data.description}</Box>
        <Box>{data.place}</Box>
        <Box component={'img'} src={data.img_url} sx={imageStyle} />
      </Stack>
    </>
  )
}

export default page
