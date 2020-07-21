import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchAuth, logIn} from "../../../../redux/authReducer";
import styles from './Login.module.css'
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../utils/formValidators";
import {Input} from "../../../common/inputs";

const Login = (props) => {
    return <div className={styles.body}>
        <form className={styles.wrapper} onSubmit={props.handleSubmit}>
            <Field component={Input}
                   name={"email"}
                   type="email"
                   placeholder="Email"
                   validate={[required]}
            />
            <Field component={Input}
                   name={"password"}
                   type="password"
                   placeholder="Password"
                   validate={[required]}
            />
            <div><Field component={"input"} type={"checkbox"} name={"rememberMe"}/><span>remember me</span></div>

            <button className={styles.btn}>Sign in 🔐</button>

        </form>
    </div>
}
const LoginForm = reduxForm({
    form: "login"
})(Login)

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAuth() //todo remove from header
    }

    onSubmit = (formData) => {
        this.props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    render() {
        return <LoginForm {...this.props}
                          onSubmit={this.onSubmit}
        />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isLoggedIn,
})
export default compose(
    connect(mapStateToProps, {fetchAuth, logIn}),
    withAuthRedirect
)(LoginContainer)