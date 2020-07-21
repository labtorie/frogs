import React from "react";
import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";


const Chat = (props) => {

    let messagesItems = props.messages.map(
        msg => <MessageBubble key={msg.id} messageText={msg.body} id={msg.id} mine={msg.isMine}/>
    )
    return (
        <div className={styles.chatWrapper} id='scrollable'>
            <div className={styles.Header}><ChatHeader currentChat={props.currentChat}/></div>
            <div className={styles.Body}>{messagesItems}</div>
            <div className={styles.Input}>
                <textarea placeholder='Новое сообщение' onChange={props.onTextInputChange}
                          value={props.currentChat.input}/>
                <button onClick={props.onSendMessage}>✔</button>
            </div>
        </div>
    )
}
export default Chat;