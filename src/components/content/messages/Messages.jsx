import React from 'react'
import styles from './Messages.module.css'
import {Route} from "react-router-dom"
import DialogsContainer from "./dialogs/DialogsContainer";
import ChatContainer from "./chat/ChatContainer";
import {withUnauthRedirect} from "../../../HOC/withAuthRedirect";


const Messages = (props) => { //TODO REAL DATA
    return (
        <div className={styles.messagesGrid}>
            <DialogsContainer/>
            <Route path="/messages/:chat" render={() => <ChatContainer/> }/>
        </div>

    )
}

export default withUnauthRedirect(Messages)