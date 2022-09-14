import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Menu.module.scss'
import Popper from '~/components/Popper'
import MenuItem from './MenuItem'
import MenuHeader from './MenuHeader'
import { useState } from 'react'

const cx = classNames.bind(styles)
const defaultFn = () => {

}

function Menu({ children, items, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const currentMenu = history[history.length - 1]

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isSubMenu = !!item.subMenu

            return <MenuItem key={index} data={item} onClick={() => {
                if (isSubMenu) {
                    setHistory(prev => [...prev, item.subMenu])
                } else {
                    onChange(item)
                }
            }} />
        })
    }


    return (
        <Tippy
            interactive
            placement="bottom-end"
            offset={[10, 10]}
            delay={[0, 700]}
            render={attrs => (
                <div className={cx('more-tab')} tabIndex="-1" {...attrs}>
                    <Popper className={cx('more-list')}>
                        {history.length > 1 && <MenuHeader title={currentMenu.title} onBack={() => {
                            setHistory(prev => prev.slice(0, history.length - 1))
                        }} />}
                        {renderItems()}
                    </Popper>
                </div>
            )}
            onHide={() => {
                setHistory(prev => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    )
}

export default Menu