import React from "react";
import styles from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.logInControls}>
                {props.isLoggedIn ? <span><span className={styles.email}> {props.email}</span><span>{props.login}</span></span> : ''}<button onClick={props.logInOut}>{props.isLoggedIn ? '👋' : '🔐'}</button>
            </div>
        </div>
    )
}

export default Header