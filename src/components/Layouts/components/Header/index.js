// import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Popper from '~/components/Popper'
import AccountItems from '~/components/AccountItems'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon } from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <img src={images.languageIcon} alt="" />,
        title: 'English',
        subMenu: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <img src={images.questionMarkIcon} alt="" />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <img src={images.keyboardIcon} alt="" />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {

    const handleMenuChange = (item) => {
        console.log(item)
    }

    const currentUser = true

    const userMenu = [
        {
            icon: <img src={images.profileIcon} alt="" />,
            title: 'Profile',
            to: '/profile'
        },
        {
            icon: <img src={images.coinsIcon} alt="" />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <img src={images.settingIcon} alt="" />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <img src={images.logoutIcon} alt="" />,
            title: 'Log out',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </a>

                <HeadlessTippy
                    interactive
                    render={attrs => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search for accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>

                    <Button to="/upload"><img className={cx('upload-icon')} src={images.plusIcon} alt="" /> Upload</Button>

                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/473785642638dfac32b64609e0f48430.jpeg?x-expires=1663311600&x-signature=hea4ox%2FVzTIg21IlNg8k7TAsB%2Fc%3D"
                                alt="yoonsulll"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <img className={cx('more-icon')} src={images.moreIcon} alt="More" />
                            </button>
                        )}
                    </Menu>

                </div>
            </div>
        </header>
    );
}

export default Header;
