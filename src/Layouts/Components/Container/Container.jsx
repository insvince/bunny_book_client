import classNames from 'classnames/bind'
import styled from './Container.module.scss'
import Navbar from '~/Layouts/Components/Navbar/Navbar'

const cx = classNames.bind(styled)

const Image = ({ src, alias }) => {
    return <img className={cx('item')} src={src} alt={alias} />
}

const Container = ({ children, layout }) => {
    let onlyContainer
    if (layout) onlyContainer = 'only'

    return (
        <div className={cx('container', { [onlyContainer]: layout })}>
            {layout ? (
                <Navbar />
            ) : (
                <>
                    <div className={cx('slideshow')}>
                        <img
                            src="http://localhost/bunny_book_store/public/img/background5.png"
                            alt="background5"
                        />
                    </div>
                    <div className={cx('collection')}>
                        <Image
                            src="http://localhost/bunny_book_store/uploads/1conan.jpg"
                            alias="1conan"
                        />
                        <Image
                            src="http://localhost/bunny_book_store/uploads/3conan.jpg"
                            alias="3conan"
                        />
                        <Image
                            src="http://localhost/bunny_book_store/uploads/12conan.jpg"
                            alias="12conan"
                        />
                        <Image
                            src="http://localhost/bunny_book_store/uploads/1695389666-vonhat.jpg"
                            alias="vonhat"
                        />
                        <Image
                            src="http://localhost/bunny_book_store/uploads/14conan.jpg"
                            alias="14conan"
                        />
                    </div>
                </>
            )}
            <main className={cx('main')}>{children}</main>
        </div>
    )
}

export default Container
