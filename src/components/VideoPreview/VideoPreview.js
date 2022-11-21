import { useRef } from 'react'
import classNames from 'classnames/bind'

import styles from './VideoPreview.module.scss'
import { PlayIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function VideoPreview({ data }) {
    const videoRef = useRef()

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div style={{ paddingTop: '132.653%' }}>
                    <div className={cx('video-container')} onMouseEnter={() => videoRef.current.play()}>
                        <div className={cx('video-inner')}>
                            <div className={cx('image')}>
                                <img src={data.thumb_url} alt="" />
                            </div>
                            <div className={cx('video')}>
                                <video muted ref={videoRef} src={data.file_url} />
                            </div>
                            <div className={cx('views')}>
                                <PlayIcon />
                                <strong className={cx('count')}>{data.views_count}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tag')}>{data.description}</div>
        </div>
    )
}

export default VideoPreview