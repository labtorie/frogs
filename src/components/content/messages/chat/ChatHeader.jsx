import styles from "./Chat.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import user from "../../../../assets/images/user.png"

const ChatHeader = (props) => {
    return (<div className={styles.wrapper}>
        <div className={styles.pPicture}><NavLink to={`/profile/${props.currentChat.id}`}><img src={(props.currentChat.photo!==null && props.currentChat.photo!=='')? props.currentChat.photo : user} alt='Profile'/></NavLink></div>
        <div className={styles.Name}><b>{props.currentChat.name}</b></div>
    </div>)
}
export default ChatHeader