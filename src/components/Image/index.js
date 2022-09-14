import { forwardRef, useState } from 'react'
import classNames from 'classnames/bind'

import images from '~/assets/images'
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback) //add 'fallback' prop when you want to add default placeholder image
    }

    return (
        <img className={cx('wrapper', className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
    )
})

export default Image