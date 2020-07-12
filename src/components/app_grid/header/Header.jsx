import React from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.btn}><NavLink to="/login"><button disabled={!props.isLoggedIn} onClick={props.logOut}>Log out</button></NavLink></div>
        </div>
    )
}

export default Header