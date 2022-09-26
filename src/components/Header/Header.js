import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import config from '~/config'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Menu'
import { InboxIcon, MessageIcon, LanguageIcon, QuestionMarkIcon, KeyboardIcon, UserIcon, TikTokCoinIcon, GearIcon, LogOutIcon, PlusIcon, EllipsisVerticalIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '~/components/Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        subMenu: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <QuestionMarkIcon />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts'
    }
]

function Header({ onShow }) {
    const currentUser = false

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Profile',
            to: config.routes.profile
        },
        {
            icon: <TikTokCoinIcon />,
            title: 'Get coins',
            to: config.routes.coin
        },
        {
            icon: <GearIcon />,
            title: 'Settings',
            to: config.routes.setting
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Log out',
            separate: true
        },
    ]

    const handleMenuChange = (item) => {
        console.log(item)
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}><img src={images.logo} alt="TikTok" /></Link>

                <div><Search /></div>

                <div className={cx('actions')}>

                    {currentUser ?
                        <Button to={config.routes.upload}><PlusIcon className={cx('upload-icon')} /> Upload</Button>
                        :
                        <Button onClick={onShow}><PlusIcon className={cx('upload-icon')} /> Upload</Button>
                    }

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
                            <Button primary onClick={onShow}>Log in</Button>
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
                                <EllipsisVerticalIcon className={cx('more-icon')} />
                            </button>
                        )}
                    </Menu>

                </div>
            </div>
        </header>
    )
}

export default Header
