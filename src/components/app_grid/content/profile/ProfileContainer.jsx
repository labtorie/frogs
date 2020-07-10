import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import axios from 'axios'
import {setUserAC, toggleFetchingAC} from "../../../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";

class ProfileDAL extends React.Component {
    componentDidMount() {
        const myId = this.props.myId //TODO actual logged in id
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.id ? this.props.match.params.id : myId}`).then(
            (response) => {
                this.props.setUser(response.data)
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
            isFetching = {this.props.isFetching}
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
        setUser: (user)=> dispatch(setUserAC(user)),
        toggleFetching: (isFetching) => dispatch(toggleFetchingAC(isFetching))
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileDAL))

export default ProfileContainer