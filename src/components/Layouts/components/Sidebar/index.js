import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('tabs')}>
                    <div>For You</div>
                    <div>Following</div>
                    <div>LIVE</div>
                </div>

                <div className={cx('suggested')}>

                </div>

                <div className={cx('following')}>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;