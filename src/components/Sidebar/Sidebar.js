import classNames from 'classnames/bind'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import config from '~/config'
import * as suggestedAccountService from '~/services/suggestedAccountService'
import { GroupUserActiveIcon, GroupUserIcon, HashtagIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, MusicIcon } from '~/components/Icons'
import styles from './Sidebar.module.scss'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Sidebar({ onShow }) {
    const currentUser = false

    const currentYear = new Date().getFullYear()

    const [suggests, setSuggests] = useState([])
    const [seeAll, setSeeAll] = useState(false)

    useEffect(() => {
        const fetchAPI = async () => {

            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5)
                setSuggests(result)
            } else {
                const result = await suggestedAccountService.suggest(1, 16)
                setSuggests(result)
            }
        }

        fetchAPI()
    }, [seeAll])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('tabs')}>
                    <NavLink to={config.routes.home} className={(nav) => cx('tab-item', { active: nav.isActive })}>
                        <HomeIcon className={cx('icon')} /> <HomeActiveIcon className={cx('active-icon')} /> For You
                    </NavLink>

                    <NavLink to={config.routes.following} className={(nav) => cx('tab-item', { active: nav.isActive })}>
                        <GroupUserIcon className={cx('icon')} /> <GroupUserActiveIcon className={cx('active-icon')} /> Following
                    </NavLink>

                    <NavLink to={config.routes.live} className={(nav) => cx('tab-item', { active: nav.isActive })}>
                        <LiveIcon className={cx('icon')} /> <LiveActiveIcon className={cx('active-icon')} /> LIVE
                    </NavLink>
                </div>

                {!currentUser && <div className={cx('login')}>
                    <div className={cx('detail')}>
                        <p>Log in to follow creators, like videos, and view comments.</p>
                        <Button outline onClick={onShow}>Log in</Button>
                    </div>
                </div>}

                <div className={cx('suggested')}>
                    <p className={cx('title')}>Suggested accounts</p>
                    {suggests.map((suggest) => {
                        return <SuggestedAccounts key={suggest.id} data={suggest} />
                    })}

                    {seeAll ? <div className={cx('see-all')} onClick={() => setSeeAll(false)}>See less</div> : <div className={cx('see-all')} onClick={() => setSeeAll(true)}>See all</div>}
                </div>

                {currentUser && <div className={cx('following')}>
                    <p className={cx('title')}>Following accounts</p>
                    <SuggestedAccounts />
                    <SuggestedAccounts />
                    <SuggestedAccounts />
                    <SuggestedAccounts />

                    <div className={cx('see-all')}>See more</div>
                </div>}

                <div className={cx('discover')}>
                    <p className={cx('title')}>Discover</p>
                    <div className={cx('discover-list')}>
                        <div className={cx('hashtag')}>
                            <HashtagIcon />
                            <p className={cx('text')}>suthatla</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <HashtagIcon />
                            <p className={cx('text')}>mackedoi</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <HashtagIcon />
                            <p className={cx('text')}>sansangthaydoi</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <MusicIcon width='1.6rem' height='1.6rem' />
                            <p className={cx('text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Remix sdaak</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <MusicIcon width='1.6rem' height='1.6rem' />
                            <p className={cx('text')}>Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <MusicIcon width='1.6rem' height='1.6rem' />
                            <p className={cx('text')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <HashtagIcon />
                            <p className={cx('text')}>7749hieuung</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <HashtagIcon />
                            <p className={cx('text')}>genzlife</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <MusicIcon width='1.6rem' height='1.6rem' />
                            <p className={cx('text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                        </div>
                        <div className={cx('hashtag')}>
                            <MusicIcon width='1.6rem' height='1.6rem' />
                            <p className={cx('text')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
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

                    <span className={cx('copyright')}><FontAwesomeIcon icon={faCopyright} /> <p>{currentYear} TikTok</p></span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar