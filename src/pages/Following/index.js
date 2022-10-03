import classNames from 'classnames/bind'

import styles from './Following.module.scss'

const cx = classNames.bind(styles)

function Following() {
    return (
        <div className={cx('wrapper')}>
            <h2>Following page</h2>
            <p>Working in progress</p>
        </div>
    );
}

export default Following