import {Container} from "@mui/material";

export async function fetchData(){
  const res = await fetch('https://picsum.photos/200')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const data = await fetchData();
  console.log("data", data);
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <h1>Home</h1>
      <div>{data}</div>
    </div>
  )
}
