import React from 'react'
import styles from './Content.module.css'
import {Route} from "react-router-dom";
import Messages from "./messages/Messages";
import LoginContainer from "./login/Login.jsx";
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
            <Route path='/login' render={() => <LoginContainer/>}/>

        </div>
    )
}

export default ContentWrapper