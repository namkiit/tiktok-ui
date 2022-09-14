import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('more-item', { separate: data.separate })} to={data.to} onClick={onClick}>{data.icon} {data.title}</Button>
    )
}

export default MenuItem