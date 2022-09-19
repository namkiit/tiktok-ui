import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function SuggestedAccounts({ sidebar, data, ...passProps }) {
    return (
        <Link to={`/@${data?.nickname}`} className={cx('wrapper', { sidebar })} {...passProps}>
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
    )
}

SuggestedAccounts.propTypes = {
    data: PropTypes.object.isRequired,
}

export default SuggestedAccounts