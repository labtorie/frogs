import React from "react";
import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";



const Chat = (props) => {

    let messagesItems = props.currentChat.messages.map(
        msg => <MessageBubble messageText={msg.messageText} id={msg.id} mine={msg.mine}/>
    )

    let onSendMessage = () => props.sendMessage();

    let onTextInputChange = (event) => props.changeInput(event.target.value);

    return (
        <div className={styles.chatWrapper}>
            <div className={styles.Header}><ChatHeader currentChat={props.currentChat}/></div>
            <div className={styles.Body}>{messagesItems}</div>
            <div className={styles.Input}>
                <textarea placeholder='Новое сообщение' onChange={ onTextInputChange } value={props.currentChat.currentInput}/>
                <button onClick={onSendMessage}>⇒</button>
            </div>
        </div>
    )
}
export default Chat;