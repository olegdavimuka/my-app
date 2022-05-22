import React from "react"
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.image}>
                <img src='https://images.unsplash.com/photo-1607024301817-3bbc081205cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80' alt='Profile logo'></img>
            </div>
            <div className={classes.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo