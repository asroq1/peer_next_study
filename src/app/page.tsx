import {Container, Divider} from "@mui/material";
import {fetchData} from "@/app/fetchData";
import Client from "@/app/Client";

export default async function Home() {
    const data = await fetchData();
    if (!data) return <div>loading...</div>;

    return (
        <Client data={data}/>
    )
}
