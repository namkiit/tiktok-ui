import classNames from 'classnames/bind'

import Header from '~/components/Layouts/components/Header'
import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;