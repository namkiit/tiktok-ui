import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import * as videoService from '~/services/videoService'
import Video from '~/components/Video'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    const [volume, setVolume] = useState(0.4)
    const [prevVolume, setPrevVolume] = useState(volume)

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await videoService.loadVideo('for-you', page)
            setVideos(prev => [...prev, ...result])
        }

        fetchAPI()
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage(page => page + 1)
        }
    }

    const handleAdjustVolume = (e) => {
        setVolume(e.target.value / 100)
    }

    const toggleMuted = () => {
        if (volume === 0) {
            setVolume(prevVolume)
        } else {
            setPrevVolume(volume)
            setVolume(0)
        }
    }

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video key={index} data={video} volume={volume} adjustVolume={handleAdjustVolume} toggleMuted={toggleMuted}></Video>
            ))}
        </div>
    )
}

export default Home