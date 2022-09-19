import { useState, useEffect } from "react"

import Video from "~/components/Video"

function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1`)
            .then(response => response.json())
            .then(response => setVideos(response.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div style={{ height: '2000px' }}>

            {videos.map((video) => (
                <Video key={video.id} data={video}></Video>
            ))}

        </div>
    )
}

export default Home