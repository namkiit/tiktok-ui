import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useContext } from 'react'

import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image'
import Popper from '~/components/Popper'
import Button from '../Button'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function SuggestedAccounts({ sidebar, data, ...passProps }) {
    const context = useContext(ModalContext)

    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={document.body}
                hideOnClick="false"
                placement="bottom"
                delay={[1000, 0]}
                offset={[0, 2]}
                zIndex="99"
                render={attrs => (
                    <div tabIndex="-1" {...attrs}>
                        <Popper className={cx('account-tab')}>
                            <div className={cx('header')}>
                                <Image
                                    className={cx('tippy-avatar')}
                                    src={data?.avatar}
                                    alt={data?.avatar}
                                />

                                <Button primary onClick={context.handleShowModal}>Follow</Button>
                            </div>

                            <div className={cx('tippy-username')}>
                                <span>{data?.nickname}</span>
                                {data?.tick && <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />}
                            </div>

                            <div className={cx('tippy-name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</div>

                            <div className={cx('user-stats')}>
                                <div className={cx('follower-stats')}>
                                    <span className={cx('bold')}>{data?.followers_count}</span> Followers
                                </div>

                                <div className={cx('like-stats')}>
                                    <span className={cx('bold')}>{data?.likes_count}</span> Likes
                                </div>
                            </div>
                        </Popper>
                    </div>
                )}
            >
                <Link to={`/@${data?.nickname}`} className={cx('wrapper', { sidebar })} {...passProps} state={data}>
                    <Image
                        className={cx('avatar')}
                        src={data?.avatar}
                        alt={data?.avatar}
                    />

                    <div className={cx('info')}>
                        <div className={cx('username')}>
                            <span>{data?.nickname}</span>
                            {data?.tick && <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />}
                        </div>
                        <div className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`}</div>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    data: PropTypes.object.isRequired,
}

export default SuggestedAccounts