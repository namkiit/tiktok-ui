import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './SearchAccounts.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function SearchAccounts({ sidebar, data, ...passProps }) {
    return (
        <Link to={`/@${data?.nickname}`} className={cx('wrapper', { sidebar })} {...passProps} state={data}>
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
                <div className={cx('name')}>{data?.full_name || `${data?.first_name} ${data?.last_name}`} - <strong>{data?.followers_count}</strong> Followers</div>
                <div className={cx('bio')}>{data?.bio}</div>
            </div>
        </Link>
    )
}

SearchAccounts.propTypes = {
    data: PropTypes.object.isRequired,
}

export default SearchAccounts