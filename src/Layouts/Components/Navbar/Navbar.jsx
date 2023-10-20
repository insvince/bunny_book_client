import classNames from 'classnames/bind'
import styled from './Navbar.module.scss'
import Button from '~/Layouts/Components/Button/Button'

const cx = classNames.bind(styled)

const Navbar = () => {
    return (
        <div className={cx('navbar')}>
            <ul>
                <Button to="/">Home</Button>
                <Button to="/book">Book</Button>
                <Button to="/news">News</Button>
                <Button to="/contact">Contact</Button>
                <Button to="/support">Support</Button>
            </ul>
        </div>
    )
}

export default Navbar
