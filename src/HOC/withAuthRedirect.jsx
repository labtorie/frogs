import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";




export const withUnauthRedirect = (Component) => {
    const mapStateToProps = (state) =>( {
        isAuth: state.auth.isLoggedIn
    })
    return connect(mapStateToProps, {})(class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' /> //todo remember previous path
            return <Component {...this.props}/>
        }
    })
}

export const withAuthRedirect = (Component) => {
    const mapStateToProps = (state) =>( {
        isAuth: state.auth.isLoggedIn
    })
    return connect(mapStateToProps, {})(class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to='/profile'/> //todo restore prev
            return <Component {...this.props}/>
        }
    })
}
