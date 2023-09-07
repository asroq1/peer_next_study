import Image from 'next/image'
import styles from './page.module.css'
import {Container} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <img alt={"이미지"}/>
        <div>설명</div>
        <div>장소</div>
    </Container>
  )
}
