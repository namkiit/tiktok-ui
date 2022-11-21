import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import config from '~/config'
import * as suggestedAccountService from '~/services/suggestedAccountService'
import { GroupUserActiveIcon, GroupUserIcon, HashtagIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, MusicIcon } from '~/components/Icons'
import styles from './Sidebar.module.scss'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import Button from '~/components/Button'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function Sidebar({ shrink }) {
    const currentUser = false
    const context = useContext(ModalContext)

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
        <div className={cx('wrapper', { shrink: shrink })}>
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
                        <Button outline onClick={context.handleShowModal}>Log in</Button>
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
                        <a href="https://www.tiktok.com/about?lang=en" target="blank">About</a>
                        <a href="https://www.tiktok.com/browse" target="blank">TikTok Browse</a>
                        <a href="https://newsroom.tiktok.com/" target="blank">Newsroom</a>
                        <a href="https://www.tiktok.com/about/contact?lang=en" target="blank">Contact</a>
                        <a href="https://careers.tiktok.com" target="blank">Careers</a>
                        <a href="https://www.bytedance.com/" target="blank">ByteDance</a>
                    </div>

                    <div className={cx('links-2')}>
                        <a href="https://www.tiktok.com/forgood" target="blank">TikTok for Good</a>
                        <a href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web" target="blank">Advertise</a>
                        <a href="https://developers.tiktok.com/?refer=tiktok_web" target="blank">Developers</a>
                        <a href="https://www.tiktok.com/transparency?lang=en" target="blank">Transparency</a>
                        <a href="https://www.tiktok.com/tiktok-rewards/en" target="blank">TikTok Rewards</a>
                    </div>

                    <div className={cx('links-3')}>
                        <a href="https://support.tiktok.com/en" target="blank">Help</a>
                        <a href="https://www.tiktok.com/safety?lang=en" target="blank">Safety</a>
                        <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="blank">Terms</a>
                        <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="blank">Privacy</a>
                        <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="blank">Creator Portal</a>
                        <a href="https://www.tiktok.com/community-guidelines?lang=en" target="blank">Community Guidelines</a>
                    </div>

                    <span className={cx('copyright')}><FontAwesomeIcon icon={faCopyright} /> <p>{currentYear} TikTok - Made by namkiit</p></span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar