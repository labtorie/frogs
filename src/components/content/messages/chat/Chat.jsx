import React from "react";
import styles from "./Chat.module.css";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import {Field, reduxForm} from "redux-form";



const NewMessage = (props) =>  {
    return <form className={styles.Input} onSubmit={props.handleSubmit}>
        <Field placeholder='Новое сообщение' component={"textarea"} name={"newMessageBody"}/>
        <button>✔</button>
    </form>
}
const NewMessageForm = reduxForm({ form: "newMessage"})(NewMessage);
const Chat = (props) => {

    let messagesItems = props.messages.map(
        msg => <MessageBubble key={msg.id} messageText={msg.body} id={msg.id} mine={msg.isMine}/>
    )
    return (
        <div className={styles.chatWrapper} id='scrollable'>
            <div className={styles.Header}><ChatHeader currentChat={props.currentChat}/></div>
            <div className={styles.Body}>{messagesItems}</div>
            <NewMessageForm {...props} onSubmit={props.onSubmit}/>
        </div>
    )
}
export default Chat