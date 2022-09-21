import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import Popper from '~/components/Popper'
import MenuItem from './MenuItem'
import MenuHeader from './MenuHeader'
import { useState } from 'react'

const cx = classNames.bind(styles)
const defaultFn = () => {

}

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const currentMenu = history[history.length - 1]

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isSubMenu = !!item.subMenu

            return <MenuItem key={index} data={item} onClick={() => {
                if (isSubMenu) {
                    setHistory(prev => [...prev, item.subMenu]) //switch to next page if children has submenu
                    document.body.classList.add(cx('lock-scroll'))
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    const handleResetMenu = () => {  //reset to first page
        setHistory(prev => prev.slice(0, 1))
        document.body.classList.remove(cx('lock-scroll'))
    }

    const handleBackMenu = () => {
        setHistory(prev => prev.slice(0, history.length - 1))
        if (history.length < 3) {
            document.body.classList.remove(cx('lock-scroll'))
        }
    }

    return (
        <HeadlessTippy
            interactive
            hideOnClick="false"
            placement="bottom-end"
            offset={[10, 10]}
            delay={[0, 700]}
            render={attrs => (
                <div className={cx('more-tab')} tabIndex="-1" {...attrs}>
                    <Popper className={cx('more-list')}>
                        {history.length > 1 && <MenuHeader title={currentMenu.title} onBack={handleBackMenu} />}
                        <div className={cx('list-body')}>{renderItems()}</div>
                    </Popper>
                </div>
            )}
            onHide={handleResetMenu}
        >
            {children}
        </HeadlessTippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default Menu