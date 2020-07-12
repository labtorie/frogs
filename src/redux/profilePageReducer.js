import {profileAPI} from "../API/API";

const SET_USER = 'SET-USER'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

const initialState = {
    user: {},
    isFetching: false
}

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                user: {
                    id: action.user.userId,
                    profilePictureURL: action.user.photos.large,
                    name: action.user.fullName,
                    bio: action.user.aboutMe,
                }
                ,
                isFetching: state.isFetching
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }

}

export const setUser = (user) => ({type: SET_USER, user})
export const toggleFetching = (isFetching)=>({type: TOGGLE_FETCHING, isFetching})

export const fetchProfile = (userID, myID)=>(dispatch)=>{
    dispatch(toggleFetching(true))
    profileAPI.fetchProfile(userID, myID).then(
        (response) => {
            dispatch(setUser(response))
            dispatch(toggleFetching(false))
        }
    )
}