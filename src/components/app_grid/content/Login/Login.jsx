import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchAuth, updateFields, logIn} from "../../../../redux/authReducer";
import styles from './Login.module.css'
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
import {NavLink} from "react-router-dom";

const Login = (props) => {
    return <div className={styles.body}><div className={styles.wrapper}>
        <input onChange={props.onEmailInputChange}
               type="email"
               placeholder="Email"
               value={props.emailInput}/>
        <input onChange={props.onPasswordInputChange}
               type="password"
               placeholder="Password"
               value={props.passwordInput}/>
        <NavLink to="/profile"><button className={styles.btn} onClick={props.logIn}>Sign in 🔐</button></NavLink>
    </div>
    </div>
}

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAuth() //todo remove from header
    }

    onEmailInputChange = (event) => {
        this.props.updateFields(false, event.target.value)
    }
    onPasswordInputChange = (event) => {
        this.props.updateFields(true, event.target.value)
    }
    logIn = () => {
        this.props.logIn(this.props.emailInput, this.props.passwordInput)
    }

    render() {
        return <Login {...this.props}
                      onEmailInputChange={this.onEmailInputChange}
                      onPasswordInputChange={this.onPasswordInputChange}
                      logIn={this.logIn}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isLoggedIn,
    passwordInput: state.auth.fields.password,
    emailInput: state.auth.fields.email
})
export default compose(
    connect(mapStateToProps, {fetchAuth, updateFields, logIn}),
    withAuthRedirect
)(LoginContainer)