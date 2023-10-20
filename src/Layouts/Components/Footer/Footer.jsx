import classNames from 'classnames/bind'
import styled from './Footer.module.scss'
import Button from '~/Layouts/Components/Button/Button'

const cx = classNames.bind(styled)

const Footer = ({ layout }) => {
    let sideBarLess
    if (layout) sideBarLess = 'less'

    return (
        <footer className={cx({ [sideBarLess]: layout })}>
            <div className={cx('footer__top')}>
                <div className={cx('about__top')}>
                    <div className={cx('title__top')}>Thông Tin</div>
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/infomation/gioi-thieu.html"
                        children="Giới thiệu"
                    />
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/infomation/doi-tac.html"
                        children="Đối tác"
                    />
                </div>
                <div className={cx('about__top')}>
                    <div className={cx('title__top')}>Chính sách</div>
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/policy/doi-hang.html"
                        children=" Chính sách đổi hàng"
                    />

                    <Button
                        href="http://localhost/bunny_book_store/views/personal/policy/bao-mat.html"
                        children=" Chính sách bảo mật"
                    />
                </div>
                <div className={cx('about__top')}>
                    <div className={cx('title__top')}>FAQ</div>
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/fqa/tt-vc.html"
                        children="Thanh toán và vận chuyển"
                    />
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/fqa/check-booking.html"
                        children="Kiểm tra thông tin đơn hàng"
                    />
                    <Button
                        href="http://localhost/bunny_book_store/views/personal/fqa/question.html"
                        children="Câu hỏi thường gặp"
                    />
                </div>
            </div>

            <div className={cx('footer__bottom')}>
                <div className={cx('about__bottom')}>
                    <p className={cx('content')}>Nhận khuyến mãi từ tụi mình.</p>
                    <form className="form1" action="">
                        <input type="text" placeholder="Nhập địa chỉ email của bạn" />
                        <input type="submit" value="Gửi" />
                    </form>
                </div>
                <div className={cx('about__bottom')}>
                    <p className={cx('content')}>Tra cứu đơn hàng của bạn</p>
                    <form className="form1" action="">
                        <input type="text" placeholder="Nhập SĐT hoặc Mã đơn hàng" />
                        <input type="submit" value="Gửi" />
                    </form>
                </div>
                <div className={cx('about__bottom')}>
                    <a target="blank" href="https://gmail.com">
                        <i className="fas fa-envelope" aria-hidden="true" />
                        <p className="support">GÓP Ý/ THAN PHIỀN</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
