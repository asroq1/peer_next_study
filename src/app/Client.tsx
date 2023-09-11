import {Divider} from "@mui/material";

export default async function Client({data}: any) {
    const isClient = typeof window === 'object'

    console.log('homeisClient', isClient)
    return (
        <div>
            <h1>Home</h1>
            {
                data?.map((v) => {
                    return (
                        <div key={v?.id}>
                            <img alt="사진" src={"https://picsum.photos/200/300"}/>
                            <div>
                                <strong>
                                    {v?.title}
                                </strong>
                            </div>
                            <div>
                                {v?.body}
                            </div>
                            <Divider/>
                        </div>
                    )
                })
            }
        </div>
    )
}
