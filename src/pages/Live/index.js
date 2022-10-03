import classNames from 'classnames/bind'

import styles from './Live.module.scss'

const cx = classNames.bind(styles)

function Live() {
    return (
        <div className={cx('wrapper')}>
            <h2>LIVE page</h2>
            <p>Working in progress</p>
        </div>
    );
}

export default Live