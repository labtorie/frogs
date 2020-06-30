import React from 'react'
import styles from './Content.module.css'
import {Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Messages from "./Messages/Messages";

const ContentWrapper = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <Route path='/profile' render={() => <Profile
                profile={props.profile}/>}/>
            <Route path='/messages' render={() => <Messages
                dialogs={props.dialogs} messages={props.messages}/>}/>

        </div>
    )
}

export default ContentWrapper