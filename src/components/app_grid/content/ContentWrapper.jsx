import React from 'react'
import styles from './Content.module.css'
import {Route} from "react-router-dom";
import Messages from "./Messages/Messages";
import Info from "./info/Info";
import ProfileContainer from "./profile/ProfileContainer";
import UsersContainer from "./users/UsersContainer";

const ContentWrapper = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <Route path='/profile/:id?' render={() => <ProfileContainer/>
            }/>
            <Route path='/messages' render={() => <Messages/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/info' render={() => <Info/>}/>

        </div>
    )
}

export default ContentWrapper