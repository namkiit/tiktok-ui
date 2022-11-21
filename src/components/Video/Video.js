import { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Video.module.scss'
import { CommentIcon, FlagIcon, HeartIcon, MusicIcon, MutedIcon, PauseIcon, PlaySolidIcon, ShareSolidIcon, VolumeIcon } from '~/components/Icons'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Popper from '~/components/Popper'
import { ModalContext } from '~/components/ModalProvider'
import ShareAction from '~/components/ShareAction'

const cx = classNames.bind(styles)

function Video({ data, mute, volume, adjustVolume, toggleMuted }) {
    const [isPlaying, setIsPlaying] = useState(false)

    const videoRef = useRef()
    const context = useContext(ModalContext)

    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0
        } else
            videoRef.current.volume = volume
    })

    const playVideo = () => {
        if (isPlaying === false) {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    const pauseVideo = () => {
        if (isPlaying === true) {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    const togglePlayVideo = () => {
        if (isPlaying === false) {
            playVideo()
        } else {
            pauseVideo()
        }
    }

    function playVideoInViewport() {
        var bounding = videoRef.current.getBoundingClientRect()

        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            playVideo()
        } else {
            pauseVideo()
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', playVideoInViewport)
        return () => window.removeEventListener('scroll', playVideoInViewport)
    })

    return (
        <div className={cx('wrapper')}>
            <Link to={`/@${data?.user.nickname}`} state={data?.user}>
                <Image
                    className={cx('avatar')}
                    src={data?.user.avatar}
                    alt={data?.user.avatar}
                />
            </Link>

            <div className={cx('content')}>
                <div className={cx('info-wrapper')}>
                    <div className={cx('text-info')}>
                        <Link to={`/@${data?.user.nickname}`} state={data?.user}>
                            <div className={cx('author')}>
                                <div>
                                    <HeadlessTippy
                                        interactive
                                        hideOnClick="false"
                                        placement="bottom"
                                        delay={[1000, 0]}
                                        offset={[40, 30]}
                                        zIndex="99"
                                        render={attrs => (
                                            <div tabIndex="-1" {...attrs}>
                                                <Popper className={cx('account-tab')}>
                                                    <div className={cx('header')}>
                                                        <Image
                                                            className={cx('tippy-avatar')}
                                                            src={data?.user.avatar}
                                                            alt={data?.user.avatar}
                                                        />

                                                        <Button primary outline onClick={context.handleShowModal}>Follow</Button>
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

                                                    <div className={cx('user-bio')}>
                                                        {data?.user.bio}
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
                        </Link>

                        <div className={cx('caption')}>{data?.description}</div>
                        <div className={cx('music')}><MusicIcon className={cx('icon')} />{data?.music}</div>
                    </div>

                    <Button outline style={{ height: '28px' }} onClick={context.handleShowModal}>Follow</Button>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video
                            style={data?.meta.video.resolution_x < data?.meta.video.resolution_y ? { width: '273px' } : { width: '463px' }}
                            loop
                            src={data?.file_url}
                            ref={videoRef}
                        ></video>

                        <div className={cx('control-play')} onClick={togglePlayVideo}>
                            {isPlaying ? <PauseIcon /> : <PlaySolidIcon />}
                        </div>

                        <div className={cx('control-volume', { active: mute })}>
                            <div className={cx('container')}>
                                <input type="range" min="0" max="100" step="1" orient="vertical" onChange={adjustVolume} value={volume * 100} />
                            </div>

                            <div className={cx('volume-icon')} onClick={toggleMuted}>{mute ? <MutedIcon /> : <VolumeIcon />}</div>
                        </div>

                        <div className={cx('report')}>
                            <FlagIcon /> Report
                        </div>
                    </div>

                    <div className={cx('actions')}>
                        <div className={cx('action-btn')}>
                            <Button rounded onClick={context.handleShowModal}><HeartIcon /></Button>
                            <p className={cx('numbers')}>{data?.likes_count}</p>
                        </div>
                        <div className={cx('action-btn')}>
                            <Button rounded onClick={context.handleShowModal}><CommentIcon /></Button>
                            <p className={cx('numbers')}>{data?.comments_count}</p>
                        </div>
                        <ShareAction offset={[90, 0]}>
                            <div className={cx('action-btn')}>
                                <Button rounded><ShareSolidIcon /></Button>
                                <p className={cx('numbers')}>{data?.shares_count}</p>
                            </div>
                        </ShareAction>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Video