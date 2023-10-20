import classNames from 'classnames/bind'
import styled from './TitleArrival.module.scss'

const cx = classNames.bind(styled)

const TitleArrival = ({ title, slide, arrivals }) => {
    return (
        <div className={cx('title__arrival')}>
            <h1>{title}</h1>
            <div className={cx('line')} />
        </div>
    )
}

export default TitleArrival
