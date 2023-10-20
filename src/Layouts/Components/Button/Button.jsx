import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, icon, onClick, className, children, ...passProps }) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('button', {
        [className]: className,
    })

    const handleOnClick = () => {}

    return (
        <Comp className={classes} onClick={handleOnClick} {...props}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {children}
        </Comp>
    )
}

export default Button
