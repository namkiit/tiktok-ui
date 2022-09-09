import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItems.module.scss'

const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/473785642638dfac32b64609e0f48430.jpeg?x-expires=1662883200&x-signature=B%2FNHHj7dQCVZCZZViIOLlk41DKI%3D" alt="yoonsulll" />

            <div className={cx('info')}>
                <p>
                    <span className={cx('username')}>yoonsulll</span>
                    <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quynh Anh</p>
            </div>
        </div>
    )
}

export default AccountItems