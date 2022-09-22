import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useState } from 'react'

import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
import ModalForm from '~/components/ModalForm'
import styles from './DefaultLayout.module.scss'
import GetApp from '~/components/GetApp'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    const [active, setActive] = useState(false)

    const handleShowModal = () => {
        setActive(true)
    }

    const handleHideModal = () => {
        setActive(false)
    }

    return (
        <div className={cx('wrapper')}>
            <Header onShow={handleShowModal} />
            <div className={cx('container')}>
                <Sidebar onShow={handleShowModal} />
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>

            {active && <ModalForm onHide={handleHideModal} />}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout