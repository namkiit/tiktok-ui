import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import * as videoService from '~/services/videoService'
import Video from '~/components/Video'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.loadVideo('for-you', page)
            setVideos(result)
        }

        fetchAPI()
    }, [page])

    return (
        <div className={cx('wrapper')} style={{ height: '2000px' }}>
            {videos.map((video) => (
                <Video key={video.id} data={video}></Video>
            ))}
        </div>
    )
}

export default Home