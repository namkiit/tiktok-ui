import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '~/config'
import { FollowingIcon, ForYouIcon, LiveIcon } from '~/components/Icons'
import styles from './Sidebar.module.scss'
import AccountItems from '~/components/AccountItems'

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
                </div>

                <div className={cx('following')}>
                    <p className={cx('title')}>Following accounts</p>
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                    <AccountItems sidebar />
                </div>
            </div>
        </div>
    );
}

export default Sidebar