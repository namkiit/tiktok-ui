import classNames from 'classnames/bind'

import styles from './Feedback.module.scss'

const cx = classNames.bind(styles)

function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <h2>Feedback page</h2>
            <p>Working in progress</p>
        </div>
    );
}

export default Feedback