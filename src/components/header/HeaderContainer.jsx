import {connect} from "react-redux";
import React from "react";
import Header from "./Header";
import {logOut} from "../../redux/authReducer";
import {compose} from "redux";

class HeaderDAL extends React.Component {

    componentDidMount() {
    }

    logOut = () =>  this.props.logOut()

    render() {
        return <Header isLoggedIn={this.props.isLoggedIn}
                       logOut={this.logOut}/>
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
}

export default compose(
    connect(mapStateToProps, {logOut})
)(HeaderDAL)