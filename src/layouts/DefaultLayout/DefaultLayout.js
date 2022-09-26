import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useContext } from 'react'

import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
import ModalForm from '~/components/ModalForm'
import styles from './DefaultLayout.module.scss'
import GetApp from '~/components/GetApp'
import { ModalContext } from '~/components/ModalProvider'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {

    const context = useContext(ModalContext)

    return (
        <div className={cx('wrapper')}>
            <Header onShow={context.handleShowModal} />
            <div className={cx('container')}>
                <Sidebar onShow={context.handleShowModal} />
                <div className={cx('content')}>
                    {children}
                    <GetApp />
                </div>
            </div>

            {context.active && <ModalForm onHide={context.handleHideModal} />}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout