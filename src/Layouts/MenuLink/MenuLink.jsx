import classNames from 'classnames/bind'
import styled from './MenuLink.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styled)
const Item = ({ to, children }) => {
    return <Link to={to}>{children}</Link>
}

const MenuLink = () => {
    return (
        <div className={cx('menu__link')}>
            <h3>Thể Loại Sách</h3>
            <nav>
                <ul>
                    <li>
                        <Item to="/all" children="All" />
                        <Item to="/category/1" children="Book 1" />
                        <Item to="/category/2" children="Book 2" />
                        <Item to="/category/3" children="Book 3" />
                        <Item to="/category/4" children="Book 4" />
                        <Item to="/category/5" children="Book 5" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuLink
