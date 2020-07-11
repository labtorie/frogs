import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {setAuthStatus} from "../../../redux/authReducer";
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