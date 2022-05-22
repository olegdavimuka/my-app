import React from "react"
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='logo'></img>
        </header>
    )
}

export default Header