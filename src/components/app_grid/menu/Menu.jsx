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
const Menu = (props) => { //TODO REFACTOR
    return (
        <div className={styles.menu}>
            <div className={styles.menuWrapper}>
                <Item name="🐸 Профиль" linkTo="/profile"/>
                <Item name="💬 Диалоги" linkTo="/messages"/>
                <Item name="🔎 Пользователи" linkTo="/users"/>
                <Item name="🤓 Инфо" linkTo="/info"/>
            </div>
        </div>
    )
}



export default Menu