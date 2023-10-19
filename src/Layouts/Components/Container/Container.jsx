import classNames from 'classnames/bind'
import styled from './Container.module.scss'

const cx = classNames.bind(styled)

const Container = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('slideshow')}>
                <img src="http://localhost/Bunny_Book_Store/public/img/background5.png" />
            </div>
            <div className={cx('collection')}>
                <img
                    className={cx('item')}
                    src="http://localhost/Bunny_Book_Store/uploads/1conan.jpg"
                />
                <img
                    className={cx('item')}
                    src="http://localhost/Bunny_Book_Store/uploads/3conan.jpg"
                />
                <img
                    className={cx('item')}
                    src="http://localhost/Bunny_Book_Store/uploads/12conan.jpg"
                />
                <img
                    className={cx('item')}
                    src="http://localhost/Bunny_Book_Store/uploads/1695389666-vonhat.jpg"
                />
                <img
                    className={cx('item')}
                    src="http://localhost/Bunny_Book_Store/uploads/14conan.jpg"
                />
            </div>
        </div>
    )
}

export default Container
