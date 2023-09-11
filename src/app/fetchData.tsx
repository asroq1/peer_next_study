
export async function fetchData() {
    const isClient = typeof window === 'object'

    console.log('fetchisClient', isClient)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}
