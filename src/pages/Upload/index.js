import classNames from 'classnames/bind'
import Button from '~/components/Button';

import styles from './Upload.module.scss'

const cx = classNames.bind(styles)

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Upload video</span>
            <span className={cx('subtitle')}>Post a video to your account</span>

            <div className={cx('content')}>
                <div className={cx('uploader')}>
                    <div className={cx('upload')}>
                        <input type="file" accept="video/*" style={{ display: 'none' }} />
                        <div className={cx('upload-card')}>
                            <img
                                src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                className={cx('cloud-icon')} alt="" />

                            <div className={cx('text-main')}>
                                <span>Select video to upload</span>
                            </div>
                            <div className={cx('text-sub')}>
                                <span>Or drag and drop a file</span>
                            </div>
                            <div className={cx('text-video-info')}>
                                <span>MP4 or WebM</span>
                                <span>720x1280 resolution or higher</span>
                                <span>Up to 10 minutes</span>
                                <span>Less than 2 GB</span>
                            </div>

                            <Button primary>Select file</Button>
                        </div>
                    </div>
                </div>

                <div className={cx('form')}>
                    <div className={cx('caption-wrap')}></div>
                    <div className={cx('cover-wrap')}></div>
                    <div className={cx('privacy')}></div>
                    <div className={cx('switch-wrap')}></div>
                    <div className={cx('copyright-wrap')}></div>
                    <div className={cx('btn-wrap')}></div>
                </div>
            </div>
        </div>
    );
}

export default Upload