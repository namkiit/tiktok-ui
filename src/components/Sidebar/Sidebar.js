import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '~/config'
import { FollowingIcon, ForYouIcon, LiveIcon } from '~/components/Icons'
import styles from './Sidebar.module.scss'
import images from '~/assets/images'
import AccountItems from '~/components/AccountItems/'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('tabs')}>
                    <Link to={config.routes.home}><ForYouIcon /> For You</Link>
                    <Link to={config.routes.following}><FollowingIcon /> Following</Link>
                    <Link to={config.routes.live}><LiveIcon /> LIVE</Link>
                </div>

                <div className={cx('suggested')}>
                    <p className={cx('title')}>Suggested accounts</p>
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />

                    <div className={cx('see-all')}>See all</div>
                </div>

                <div className={cx('following')}>
                    <p className={cx('title')}>Following accounts</p>
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />

                    <div className={cx('see-all')}>See more</div>
                </div>

                <div className={cx('discover')}>
                    <p className={cx('title')}>Discover</p>
                    <div className={cx('discover-list')}>
                        <div className={cx('hashtag')}>
                            <img src={images.hashtag} alt="" />
                            <p className={cx('text')}>suthatla</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <img src={images.hashtag} alt="" />
                            <p className={cx('text')}>mackedoi</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <img src={images.hashtag} alt="" />
                            <p className={cx('text')}>sansangthaydoi</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <img src={images.musicIcon} alt="" />
                            <p className={cx('text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Remix sdaak</p>
                        </div>
                    </div>
                </div>

                <div className={cx('footer')}>
                    <div className={cx('links-1')}>
                        <Link to="/">About</Link>
                        <Link to="/">TikTok </Link>
                        <Link to="/">Newsroom</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">ByteDance</Link>
                    </div>

                    <div className={cx('links-2')}>
                        <Link to="/">TikTok for Good</Link>
                        <Link to="/">Advertise</Link>
                        <Link to="/">Developers</Link>
                        <Link to="/">Transparency</Link>
                        <Link to="/">TikTok Rewards</Link>
                    </div>

                    <div className={cx('links-3')}>
                        <Link to="/">Help</Link>
                        <Link to="/">Safety</Link>
                        <Link to="/">Terms</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Creator Portal</Link>
                        <Link to="/">Community Guidelines</Link>
                    </div>

                    <span className={cx('copyright')}>2022 TikTok</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar