import classNames from 'classnames/bind'
import styled from './Slide.module.scss'

const cx = classNames.bind(styled)
const Item = ({ price, href, name }) => {
    return (
        <div className={cx('item')}>
            <div className={cx('item__select')}>
                <Button href={href} />
            </div>
            <p className={cx('book__price')}>
                {price} <u>đ</u>
            </p>
            <p className={cx('book__name')}>{name}</p>
        </div>
    )
}

const Slide = () => {
    return (
        <>
            <Item />
        </>
    )
}

export default Slide
