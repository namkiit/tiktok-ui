import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Video.module.scss'
import { CommentIcon, FlagIcon, HeartIcon, MusicIcon, PauseIcon, PlayIcon, ShareIcon, VolumeIcon } from '~/components/Icons'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Popper from '~/components/Popper'

const cx = classNames.bind(styles)

function Video({ data }) {
    const [isPlaying, setIsPlaying] = useState(false)

    const videoRef = useRef()
    const imageRef = useRef()
    const authorInfoRef = useRef()

    const togglePlayVideo = () => {
        if (!isPlaying) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    const handleAdjustVolume = (e) => {
        videoRef.current.volume = e.target.value / 100
    }

    return (
        <div className={cx('wrapper')}>
            <Image
                ref={imageRef}
                className={cx('avatar')}
                src={data?.user.avatar}
                alt={data?.user.avatar}
            />

            <div className={cx('content')}>
                <div className={cx('info-wrapper')}>
                    <div className={cx('text-info')}>
                        <div className={cx('author')} ref={authorInfoRef}>
                            <div>
                                <HeadlessTippy
                                    interactive
                                    hideOnClick="false"
                                    placement="bottom"
                                    delay={[1000, 0]}
                                    offset={[40, 30]}
                                    render={attrs => (
                                        <div tabIndex="-1" {...attrs}>
                                            <Popper className={cx('account-tab')}>
                                                <div className={cx('header')}>
                                                    <Image
                                                        className={cx('tippy-avatar')}
                                                        src={data?.user.avatar}
                                                        alt={data?.user.avatar}
                                                    />

                                                    <Button primary outline>Follow</Button>
                                                </div>

                                                <div className={cx('tippy-username')}>
                                                    <span>{data?.user.nickname}</span>
                                                    {data?.user.tick && <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />}
                                                </div>

                                                <div className={cx('tippy-name')}>{data?.user.full_name || `${data?.user.first_name} ${data?.user.last_name}`}</div>

                                                <div className={cx('user-stats')}>
                                                    <div className={cx('follower-stats')}>
                                                        <span className={cx('bold')}>{data?.user.followers_count}</span> Followers
                                                    </div>

                                                    <div className={cx('like-stats')}>
                                                        <span className={cx('bold')}>{data?.user.likes_count}</span> Likes
                                                    </div>
                                                </div>
                                            </Popper>
                                        </div>
                                    )}
                                >
                                    <p className={cx('username')}>{data?.user.nickname}</p>
                                </HeadlessTippy>
                            </div>
                            <p className={cx('fullname')}>{`${data?.user.first_name} ${data?.user.last_name}`}</p>
                        </div>

                        <div className={cx('caption')}>{data?.description}</div>
                        <div className={cx('music')}><MusicIcon className={cx('icon')} />{data?.music}</div>
                    </div>

                    <Button outline style={{ height: '28px' }}>Follow</Button>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video src={data?.file_url} ref={videoRef}></video>

                        <div className={cx('control-play')} onClick={togglePlayVideo}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </div>

                        <div className={cx('control-volume')}>
                            <div className={cx('container')}>
                                <input type="range" min="0" max="100" step="1" orient="vertical" onChange={handleAdjustVolume} />
                            </div>
                            <VolumeIcon />
                        </div>

                        <div className={cx('report')}>
                            <FlagIcon /> Report
                        </div>
                    </div>

                    <div className={cx('actions')}>
                        <div className={cx('action-btn')}>
                            <Button rounded><HeartIcon /></Button>
                            <p className={cx('numbers')}>{data?.likes_count}</p>
                        </div>
                        <div className={cx('action-btn')}>
                            <Button rounded><CommentIcon /></Button>
                            <p className={cx('numbers')}>{data?.comments_count}</p>
                        </div>
                        <div className={cx('action-btn')}>
                            <Button rounded><ShareIcon /></Button>
                            <p className={cx('numbers')}>{data?.shares_count}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Video