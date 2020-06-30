import React from 'react'
import styles from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return (
        <NavLink className={styles.itemText} to={props.linkTo} activeClassName={styles.activeTab}>
            <div className={styles.item}>{props.name}</div>
        </NavLink>
    )
}
const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuWrapper}>
                <Item name="🐸 Профиль" linkTo="/profile"/>
                <Item name="💬 Диалоги" linkTo="/messages"/>
            </div>
        </div>
    )
}

export default Menu