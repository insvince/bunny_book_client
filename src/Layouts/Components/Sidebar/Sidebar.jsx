import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

import Button from '~/Layouts/Components/Button/Button'
import MenuLink from '~/Layouts/Components/MenuLink/MenuLink'
import styled from './Sidebar.module.scss'

const cx = classNames.bind(styled)

const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('sidebar__content')}>
                <div className={cx('logo')}>
                    <Button to="/">
                        <img
                            src="http://localhost/bunny_book_store/public/img/logo.png"
                            alt="logo"
                        />
                    </Button>
                </div>
                <div className={cx('extra')}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <MenuLink />
            </div>

            <div className={cx('sidebar__footer')}>
                <div className={cx('follow')}>
                    <Button
                        className={cx('btn__follow')}
                        icon={faFacebook}
                        href="https://fb.com/fb.insvince"
                    />
                    <Button
                        className={cx('btn__follow')}
                        icon={faYoutube}
                        href="https://youtube.com/"
                    />
                    <Button
                        className={cx('btn__follow')}
                        icon={faTiktok}
                        href="https://tiktok.com/"
                    />
                    <Button
                        className={cx('btn__follow')}
                        icon={faInstagram}
                        href="https://www.instagram.com/"
                    />
                </div>
                <div className={cx('copyright')}>
                    <p>Copyright © All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
