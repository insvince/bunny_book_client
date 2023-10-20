import classNames from 'classnames/bind'
import styled from './Home.module.scss'
import TitleArrival from '~/Layouts/Components/TitleArrival/TitleArrival'
import Arrivals from '~/Layouts/Components/Arrivals/Arrivals'
import News from '~/Layouts/Components/News/News'

const cx = classNames.bind(styled)

const Home = () => {
    return (
        <div className={cx('home')}>
            <TitleArrival title="New Arrivals" />
            <Arrivals />
            <TitleArrival title="Tin Tức Mỗi Ngày" />
            <News />
        </div>
    )
}

export default Home
