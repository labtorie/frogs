import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {setUserAC, toggleFetchingAC} from "../../../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {fetchProfile} from "../../../../API/API";

class ProfileDAL extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        fetchProfile(this.props.match.params.id, this.props.myId).then(
            (response) => {
                this.props.setUser(response)
                this.props.toggleFetching(false)
            }
        )
    }

    render() {
        return <Profile
            profilePictureURL={this.props.profilePictureURL}
            name={this.props.name}
            bio={this.props.bio}
            uid={this.props.uid}
            isFetching={this.props.isFetching}
        />
    }
}


const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUserAC(user)),
        toggleFetching: (isFetching) => dispatch(toggleFetchingAC(isFetching))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDAL))

export default ProfileContainer