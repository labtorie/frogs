import React from 'react'
import styles from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import {Route, useParams} from "react-router-dom"

const Messages = (props) => {
    return (
        <div className={styles.messagesGrid}>
            <div><Dialogs dialogs={props.dialogs}/></div>

            <Route path="/messages/:slug" render={() =>
                (
                    <div><Chat currentChat={props.dialogs} messages={props.messages}/></div>
                )
            }/>
        </div>

    )
}

export default Messages