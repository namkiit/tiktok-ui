import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItems.module.scss'

const cx = classNames.bind(styles)

function AccountItems({ sidebar }) {
    return (
        <div className={cx('wrapper', { sidebar })}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/473785642638dfac32b64609e0f48430.jpeg?x-expires=1663311600&x-signature=hea4ox%2FVzTIg21IlNg8k7TAsB%2Fc%3D" alt="yoonsulll" />

            <div className={cx('info')}>
                <div className={cx('username')}>
                    <span>yoonsulll</span>
                    <FontAwesomeIcon className={cx('verified')} icon={faCheckCircle} />
                </div>
                <div className={cx('name')}>Quynh Anh</div>
            </div>
        </div>
    )
}

export default AccountItems