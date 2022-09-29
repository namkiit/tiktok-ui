import classNames from 'classnames/bind'
import { useLocation } from 'react-router-dom'

import styles from './Profile.module.scss'
import Image from '~/components/Image'
import Button from '~/components/Button'
import { EllipsisHorizontalIcon, LinkIcon, ShareIcon } from '~/components/Icons'
import ShareAction from '~/components/ShareAction'

const cx = classNames.bind(styles)

function Profile() {
    const location = useLocation()

    const data = location.state

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
                            <Button primary style={{ minWidth: '208px' }}>Follow</Button>
                        </div>
                    </div>

                    <div className={cx('counts')}>
                        <div className={cx('following')}><strong>{data.followings_count}</strong> Following</div>
                        <div className={cx('followers')}><strong>{data.followers_count}</strong> Followers</div>
                        <div className={cx('likes')}><strong>{data.likes_count}</strong> Likes</div>
                    </div>

                    <div className={cx('bio')}>{data.bio}</div>

                    <a href={data.website_url} target="blank" >
                        <div className={cx('website')}><LinkIcon className={cx('link-icon')} /> {data.website_url} </div>
                    </a>
                </div>
                <div className={cx('side-btns')}>
                    <div className={cx('share-btn')}>
                        <ShareAction offset={[-100, 10]}>
                            <div><ShareIcon /></div>
                        </ShareAction>
                    </div>
                    <EllipsisHorizontalIcon />
                </div>
            </div>
        </div>
    )
}

export default Profile