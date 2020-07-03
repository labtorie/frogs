import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        name: state.profilePage.user.name,
        croaks: state.profilePage.user.croaks,
        bio: state.profilePage.user.bio,
        profilePictureURL: state.profilePage.user.profilePictureURL
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer