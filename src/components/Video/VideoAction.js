import { useState, useContext } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Video.module.scss'
import { ChevronDownIcon, CommentIcon, EmailIcon, EmbedIcon, HeartIcon, LinkIcon, PaperPlaneIcon, ShareIcon } from '~/components/Icons'
import Button from '~/components/Button'
import Popper from '~/components/Popper'
import images from '~/assets/images'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function VideoAction({ data }) {
    const [expanded, setExpanded] = useState(false)
    const context = useContext(ModalContext)

    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <PaperPlaneIcon />,
            title: 'Send to friends',
        },
        {
            icon: <img src={images.facebook} alt="" />,
            title: 'Share to Facebook',
        },
        {
            icon: <img src={images.whatsapp} alt="" />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <LinkIcon />,
            title: 'Copy link',
        },
    ]

    const EXPANDED_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <img src={images.facebook} alt="" />,
            title: 'Share to Twitter',
        },
        {
            icon: <img src={images.linkedin} alt="" />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <img src={images.telegram} alt="" />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <img src={images.line} alt="" />,
            title: 'Share to LINE',
        },
        {
            icon: <img src={images.whatsapp} alt="" />,
            title: 'Share to Pinterest',
        },
    ]

    return (
        <div className={cx('actions')}>
            <div className={cx('action-btn')}>
                <Button rounded onClick={context.handleShowModal}><HeartIcon /></Button>
                <p className={cx('numbers')}>{data?.likes_count}</p>
            </div>
            <div className={cx('action-btn')}>
                <Button rounded onClick={context.handleShowModal}><CommentIcon /></Button>
                <p className={cx('numbers')}>{data?.comments_count}</p>
            </div>

            <HeadlessTippy
                interactive
                hideOnClick="false"
                placement="bottom"
                offset={[90, 0]}
                delay={[200, 700]}
                render={attrs => (
                    <div tabIndex="-1" {...attrs}>
                        <Popper className={cx('share-tab')}>
                            <div className={cx('share-wrapper')}>
                                {expanded ? EXPANDED_SHARE_MENU.map((item, index) => {
                                    return <div className={cx('share-item')} key={index}>
                                        {item.icon} {item.title}
                                    </div>
                                })
                                    : SHARE_MENU.map((item, index) => {
                                        return <div className={cx('share-item')} key={index}>
                                            {item.icon} {item.title}
                                        </div>
                                    })}

                                {!expanded && <div className={cx('more-btn')} onClick={() => setExpanded(true)}><ChevronDownIcon /></div>}
                            </div>
                        </Popper>
                    </div>
                )}
                onHide={() => setExpanded(false)}
            >
                <div className={cx('action-btn')}>
                    <Button rounded><ShareIcon /></Button>
                    <p className={cx('numbers')}>{data?.shares_count}</p>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default VideoAction