import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {setUser, fetchProfile} from "../../../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {withUnauthRedirect} from "../../../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileDAL extends React.Component {
    componentDidMount() {
        this.props.fetchProfile(this.props.match.params.id, this.props.myId)
    }

    render() {
        return <Profile {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    //todo + contacts - fake
    return {
        name: state.profilePage.user.name,
        croaks: state.profilePage.user.croaks,
        bio: state.profilePage.user.bio,
        uid: state.profilePage.user.id,
        profilePictureURL: state.profilePage.user.profilePictureURL,
        isFetching: state.profilePage.isFetching,
        myId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {setUser, fetchProfile}),
    withRouter,
    withUnauthRedirect
)(ProfileDAL)