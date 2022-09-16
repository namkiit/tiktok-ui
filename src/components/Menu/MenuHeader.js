import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuHeader({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <div className={cx('back-icon')} onClick={onBack}><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className={cx('title')}>{title}</div>
        </header>
    )
}

MenuHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default MenuHeader