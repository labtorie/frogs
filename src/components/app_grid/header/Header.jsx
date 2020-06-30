import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={require("../header/logo.png")} alt='logo'/>
        </div>
    )
}

export default Header