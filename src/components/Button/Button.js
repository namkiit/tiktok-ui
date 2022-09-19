import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, rounded = false, disabled = false, children, onClick, ...restProps }) {
    let Component = 'button'
    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        disabled,
    })

    const props = {
        onClick,
        ...restProps,
    }

    //Remove events from disabled button
    if (disabled) {
        (Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        }))
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    return (
        <Component className={classes} {...props}>
            <>{children}</>
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button