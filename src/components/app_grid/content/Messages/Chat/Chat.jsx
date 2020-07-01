import React from "react";
import styles from "./Chat.module.css";
import {useParams} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageTextCreator} from "../../../../../store";

const ChatHeader = (props) => {
    return (<div className={styles.wrapper}>
        <div className={styles.pPicture}><img src={props.currentChat.img} alt='Profile'/></div>
        <div className={styles.Name}><b> {props.currentChat.name}</b></div>
    </div>)
}

const MessageBubble = (props) => {
    return (
        <div className={styles.messageSpace}>
            <div className={`${props.mine ? styles.sent : styles.received}`}>
                <div className={styles.bubble}> {props.messageText}</div>
            </div>
        </div>
    )
}


const Chat = (props) => {
    let {slug} = useParams();

    let newMessageText = props.currentChat[slug].newMessageText;
    let messagesItems = props.messages[slug].map(
        msg => <MessageBubble messageText={msg.messageText} id={msg.id} mine={msg.mine}/>
    )

    let sendMsg = () => {
        props.dispatch(sendMessageActionCreator(slug));
    }

    let onTextInputChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreator(text, slug));
    }

    return (
        <div className={styles.chatWrapper}>
            <div className={styles.Header}><ChatHeader currentChat={props.currentChat[slug]}/></div>
            <div className={styles.Body}>{messagesItems}</div>
            <div className={styles.Input}>
                <textarea placeholder='Новое сообщение' onChange={ onTextInputChange } value={newMessageText}/>
                <button onClick={sendMsg}>⇒</button>
            </div>
        </div>
    )
}
export default Chat;