import classNames from 'classnames/bind'
import { useState, useMemo, useEffect } from 'react'

import { QRIcon, UserIcon, XMarkIcon } from '~/components/Icons'
import styles from './ModalForm.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function ModalForm({ onHide }) {
    const [formLoginState, setFormLoginState] = useState('login')
    const [filteredForm, setFilteredForm] = useState([])

    const loginRegisterForm = useMemo(() => [
        {
            type: 'login',
            title: 'Log in to TikTok',
            contents: [
                {
                    icon: <QRIcon />,
                    title: 'Use QR code',
                },
                {
                    icon: <UserIcon />,
                    title: 'Use phone / email / username',
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Continue with Facebook',
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Continue with Google',
                },
                {
                    icon: <img src={images.twitter} alt="" />,
                    title: 'Continue with Twitter',
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Continue with LINE',
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Continue with KakaoTalk',
                },
                {
                    icon: <img src={images.apple} alt="" />,
                    title: 'Continue with Apple',
                },
                {
                    icon: <img src={images.instagram} alt="" />,
                    title: 'Continue with Instagram',
                },
            ]
        },
        {
            type: 'register',
            title: 'Sign up for TikTok',
            contents: [
                {
                    icon: <UserIcon />,
                    title: 'Use phone or email',
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Continue with Facebook',
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Continue with Google',
                },
                {
                    icon: <img src={images.twitter} alt="" />,
                    title: 'Continue with Twitter',
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Continue with LINE',
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Continue with KakaoTalk',
                },
            ]
        }
    ], [])

    useEffect(() => {
        const newForm = loginRegisterForm.find(form => form.type === formLoginState)
        setFilteredForm(newForm)
    }, [loginRegisterForm, formLoginState])

    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>

                    <div className={cx('inner')}>
                        <div className={cx('title')}>{filteredForm.title}</div>

                        <div className={cx('list')}>
                            {filteredForm.contents?.map((content, index) => {
                                return <Button style={{ height: '44px', marginBottom: '16px' }} key={index}>
                                    <span className={cx('icon')}>{content.icon}</span> <span>{content.title}</span>
                                </Button>
                            })}
                        </div>
                    </div>

                    {formLoginState === 'register' &&
                        <div className={cx('agreement')}>
                            <p> By continuing, you agree to TikTok's <Link to="/">Terms of Service</Link> and confirm that you have read TikTok's <Link to="/">Privacy Policy</Link>.</p>
                        </div>}

                    <div className={cx('footer')}>
                        {formLoginState === 'login' ?
                            <>Don't have an account? <p onClick={() => setFormLoginState('register')}> Sign up</p> </> :
                            <>Already have an account? <p onClick={() => setFormLoginState('login')}>Log in</p></>
                        }
                    </div>
                </div>

                <div className={cx('close-btn')} onClick={onHide}> <XMarkIcon /> </div>
            </div>
        </div>

    )
}

export default ModalForm