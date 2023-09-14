import axios from 'axios'
import ViewCard from '@/components/ViewCard'
interface Content {
  id: number;
  title: string;
  content: string;
}
export default async function View(props : {params: {id: string}, searchParams: {}}) {
  const apiUrl = `http://localhost:4000/content/${props.params.id}`;
  async function getContent(): Promise<Content | null> {
    try {
      const response = await axios.get(apiUrl);
      const content: Content | null = response.data;
      return content;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  const content : Content | null = await getContent();
  return (
    <div>
      <h2>{`상세페이지 ${props.params.id}번`}</h2>
      {content && <ViewCard title={content.title} content={content.content} />}
      {!content && <p>존재하지 않는 페이지입니다.</p>}
    </div>
  )
}