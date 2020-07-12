import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setAuthStatus, logIn, logOut, updateFields} from "../../../redux/authReducer";
import {authAPI} from "../../../API/API";

class HeaderDAL extends React.Component {

    componentDidMount() {
        authAPI.fetchAuth()
            .then(
                (response) => {
                    this.props.setAuthStatus({
                        id: response.data.id,
                        login: response.data.login,
                        email: response.data.email,
                        isLoggedIn: response.resultCode === 0,
                    })
                }
            )
    }

    onEmailInputChange = (event) => {
        this.props.updateFields(false, event.target.value)
    }
    onPasswordInputChange = (event) => {
        this.props.updateFields(true, event.target.value)
    }

    logInOut = () => {
        this.props.isLoggedIn ? this.props.logOut() : this.props.logIn(this.props.emailInput, this.props.passwordInput)
    }


    render() {
        return <Header passwordInput={this.props.passwordInput} emailInput={this.props.emailInput}
                       isLoggedIn={this.props.isLoggedIn} email={this.props.email} login={this.props.login}
                       logInOut={this.logInOut} onEmailInputChange={this.onEmailInputChange}
                       onPasswordInputChange={this.onPasswordInputChange}/>
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isLoggedIn: state.auth.isLoggedIn,
        emailInput: state.auth.fields.email,
        passwordInput: state.auth.fields.password
    }
}


const HeaderContainer = connect(mapStateToProps,
    {setAuthStatus, logIn, logOut, updateFields}
)(HeaderDAL)

export default HeaderContainer