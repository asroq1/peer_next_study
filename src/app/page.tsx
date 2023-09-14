import Image from 'next/image'
import styles from './page.module.css'
import ViewCard from '@/components/ViewCard'
import Link from 'next/link'
import axios from 'axios'

interface Content {
  id: number;
  title: string;
  content: string;
}

export default async function Home() {
  const apiUrl = "http://localhost:4000/content";
  async function getContents(): Promise<Content[] | null> {
    try {
      const response = await axios.get(apiUrl);
      const contents: Content[] | null = response.data;
      return contents;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  const contents : Content[] | null = await getContents();
  return (
    <>
    <main className={styles.main}>
      {contents && contents.map((content) => {
        return (
          <Link key={content.id} href={`/view/${content.id}`}>
              <ViewCard
                key={content.id}
                title={content.title}
                content={content.content}
              />
          </Link>
        );
      })}
    </main>
      <Link href="/write">
        <p>글 작성하기</p>
      </Link>
    </>
  )
}
