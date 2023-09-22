'use client'

import { Box, Stack } from '@mui/material'
import axios from 'axios'
import { ST } from 'next/dist/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

interface Feed {
  id: number
  img_url: string
  place: string
  description: string
}

export default function Home() {
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
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error, isLoading } = useSWR(
    'http://localhost:4000/feed',
    fetcher,
  )

  if (isLoading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  if (!data) return <div>데이터 없음</div>

  return (
    <>
      {data.map((item: Feed) => {
        return (
          <Stack sx={feedStyle}>
            <Box>{item.description}</Box>
            <Box>{item.place}</Box>
            <Link href={`/detail/${item.id}`}>
              {/* <Box component={'img'} src={item.img_url} sx={imageStyle} /> */}
              {/* <img src={item.img_url} alt="" /> */}
            </Link>
          </Stack>
        )
      })}
      {/* <img src="https://picsum.photos/100/100" alt="1" />
      <img src="https://picsum.photos/101/101" alt="2" />
      <img src="https://picsum.photos/102/102" alt="3" />
      <img src="https://picsum.photos/103/103" alt="4" /> */}
      <Stack>
        <Image
          src="https://picsum.photos/100/100"
          alt="1"
          width={100}
          height={100}
        />
        <Image
          src="https://picsum.photos/101/101"
          alt="2"
          width={100}
          height={100}
        />
        <Image
          src="https://picsum.photos/102/102"
          alt="3"
          width={100}
          height={100}
        />
        <Image
          src="https://picsum.photos/103/103"
          alt="4"
          width={100}
          height={100}
        />
      </Stack>
    </>
  )
}
