import React from 'react'
import styles from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import {Route, useParams} from "react-router-dom"

const Messages = (props) => {
    return (
        <div className={styles.messagesGrid}>
            <div><Dialogs dialogs={props.state.dialogs}/></div>

            <Route path="/messages/:slug" render={() =>
                (
                    <div><Chat currentChat={props.state.dialogs}
                               messages={props.state.messages}
                               funcs={props.funcs.chatPage}
                    /></div>
                )
            }/>
        </div>

    )
}

export default Messages