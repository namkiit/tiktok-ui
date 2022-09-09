import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Popper from '~/components/Popper'
import AccountItems from '~/components/AccountItems'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Header() {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </a>

                <Tippy
                    interactive
                    visible={searchResults.length > 0}
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button>+ Upload</Button>

                    <Button primary>Log in</Button>

                    <img className={cx('more-icon')} src={images.moreicon} alt="More" />

                    {/*
                        <img className={cx('message-icon')} src={images.messageicon} alt="Messages" />

                        <img src={images.inboxicon} alt="Inbox" />
                   
                        <img src={images.inboxicon} alt="TikTok" />
                     */}

                </div>
            </div>
        </header>
    );
}

export default Header;
