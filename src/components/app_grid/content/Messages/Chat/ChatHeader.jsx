import styles from "./Chat.module.css";
import React from "react";

const ChatHeader = (props) => {
    return (<div className={styles.wrapper}>
        <div className={styles.pPicture}><img src={props.currentChat.profilePictureURL} alt='Profile'/></div>
        <div className={styles.Name}><b>{props.currentChat.name}</b></div>
    </div>)
}
export default ChatHeader