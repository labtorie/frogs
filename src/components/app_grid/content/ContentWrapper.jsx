import React from 'react'
import styles from './Content.module.css'
import {Route} from "react-router-dom";
import Messages from "./Messages/Messages";
import Info from "./info/Info";
import ProfileContainer from "./profile/ProfileContainer";

const ContentWrapper = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <Route path='/profile' render={() => <ProfileContainer/>}/>
            <Route path='/messages' render={() => <Messages/>}/>
            <Route path='/info' render={() => <Info/>}/>

        </div>
    )
}

export default ContentWrapper