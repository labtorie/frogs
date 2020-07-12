import React from "react";
import styles from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.logInControls}>
                {props.isLoggedIn ? <span><span className={styles.email}> {props.email}</span><span
                        className={styles.login}>{props.login}</span></span> :
                    <div className={styles.fields}>
                        <input className={styles.emIn}
                               onChange={props.onEmailInputChange}
                               placeholder="email pls"
                               value={props.emailInput}/>

                        <input className={styles.pIn}
                               onChange={props.onPasswordInputChange}
                               type="password"
                               placeholder="password pls"
                               value={props.passwordInput}/>
                    </div>}
                <button onClick={props.logInOut}>{props.isLoggedIn ? 'Log out 👋' : 'Sign in 🔐'}</button>
            </div>
        </div>
    )
}

export default Header