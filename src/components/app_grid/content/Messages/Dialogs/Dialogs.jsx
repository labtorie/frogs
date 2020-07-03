import React from 'react'
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// chats[],
const DialogItem = (props) => {
    return (
        <NavLink className={styles.Link} to={`/messages/${props.id}`} activeClassName={styles.activeChat}>
            <div className={styles.dialogItem}>
                <div className={styles.profilePicture}>
                    <img src={props.img} alt='Profile'/>
                </div>
                <div className={styles.name}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}

const Dialogs = (props) => {
    let dialogElements = props.chats.map(
        chat => <DialogItem name={chat.name} img={chat.profilePictureURL} id={chat.id}/>
    )
    return (<div className={styles.dialogsWrapper}>
            {dialogElements}
        </div>
    )
}

export default Dialogs