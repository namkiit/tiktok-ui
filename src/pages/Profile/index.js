import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Profile.module.scss'
import Image from '~/components/Image'
import Button from '~/components/Button'
import { BanIcon, EllipsisHorizontalIcon, FlagIcon, LinkIcon, ShareIcon, UserRegularIcon } from '~/components/Icons'
import ShareAction from '~/components/ShareAction'
import VideoPreview from '~/components/VideoPreview'
import Popper from '~/components/Popper'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function Profile() {
    const location = useLocation()
    const data = location.state

    const [videos, setVideos] = useState([])
    const context = useContext(ModalContext)

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
            .then(response => response.json())
            .then(json => setVideos(json.data.videos))

    }, [data.nickname])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('basic')}>
                        <Image
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={data.avatar}
                        />
                        <div className={cx('text')}>
                            <div className={cx('username')}>{data.nickname}</div>
                            <div className={cx('name')}>{data.full_name || `${data.first_name} ${data.last_name}`}</div>
                            <Button primary style={{ minWidth: '208px' }} onClick={context.handleShowModal}>Follow</Button>
                        </div>
                    </div>

                    <div className={cx('counts')}>
                        <div className={cx('following')}><strong>{data.followings_count}</strong> Following</div>
                        <div className={cx('followers')}><strong>{data.followers_count}</strong> Followers</div>
                        <div className={cx('likes')}><strong>{data.likes_count}</strong> Likes</div>
                    </div>

                    <div className={cx('bio')}>{data.bio ? data.bio : 'No bio yet.'}</div>

                    <a href={data.website_url} target="blank" >
                        {data.website_url && <div className={cx('website')}><LinkIcon className={cx('link-icon')} />{data.website_url}</div>}
                    </a>
                </div>
                <div className={cx('side-btns')}>
                    <div className={cx('share-btn')}>
                        <ShareAction offset={[-100, 10]}>
                            <div><ShareIcon /></div>
                        </ShareAction>
                    </div>

                    <HeadlessTippy
                        interactive
                        hideOnClick="false"
                        placement="bottom-end"
                        offset={[0, 10]}
                        delay={[0, 700]}
                        zIndex="99"
                        render={attrs => (
                            <div tabIndex="-1" {...attrs}>
                                <Popper className={cx('more-tab')}>
                                    <div className={cx('action-report')}>
                                        <p><FlagIcon height="16" /> Report</p>
                                    </div>

                                    <div className={cx('action-block')}>
                                        <p><BanIcon /> Block</p>
                                    </div>
                                </Popper>
                            </div>
                        )}
                    >
                        <div><EllipsisHorizontalIcon /></div>
                    </HeadlessTippy>
                </div>
            </div>

            <div className={cx('video-container')}>
                <div className={cx('tabs')}>
                    <p className={cx('video-tab')}>Videos</p>
                    <p className={cx('liked-tab')}>Liked</p>
                    <div className={cx('underline')}></div>
                </div>

                {videos.length > 0 && <div className={cx('videos')}>
                    {videos.map((video, index) => {
                        return <VideoPreview data={video} key={index} />
                    })}

                </div>}

                {videos.length === 0 && <div className={cx('no-content')}>
                    <div>
                        <UserRegularIcon />
                        <p className={cx('title')}>No content</p>
                        <p className={cx('description')}>This user has not published any videos.</p>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Profile