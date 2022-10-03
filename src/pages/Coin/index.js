import classNames from 'classnames/bind'

import styles from './Coin.module.scss'

const cx = classNames.bind(styles)

function Coin() {
    return (
        <div className={cx('wrapper')}>
            <h2>Coin page</h2>
            <p>Working in progress</p>
        </div>
    );
}

export default Coin