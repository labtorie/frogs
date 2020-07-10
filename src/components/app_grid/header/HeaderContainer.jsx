import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setAuthStatus} from "../../../redux/authReducer";
import axios from "axios";

class HeaderDAL extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(
                (response) => {
                    this.props.setAuthStatus({
                        id: response.data.data.id,
                        login: response.data.data.login,
                        email: response.data.data.email,
                        isLoggedIn: response.data.resultCode === 0,
                    })
                }
            )
    }
    logInOut = () => {
        alert('log')
}

    render() {
        return <Header isLoggedIn={this.props.isLoggedIn} email={this.props.email} login={this.props.login} logInOut={this.logInOut}/>
    }
}


const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isLoggedIn: state.auth.isLoggedIn
    }
}


const HeaderContainer = connect(mapStateToProps,
    {setAuthStatus}
)(HeaderDAL)

export default HeaderContainer