import styles from "./Chat.module.css";
import React from "react";

const MessageBubble = (props) => {
    return (
        <div className={styles.messageSpace}>
            <div className={`${props.mine ? styles.sent : styles.received}`}>
                <div className={styles.bubble}> {props.messageText}</div>
            </div>
        </div>
    )
}
export default MessageBubble