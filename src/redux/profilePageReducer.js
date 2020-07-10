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

export const setUserAC = (user) => ({type: SET_USER, user})
export const toggleFetchingAC = (isFetching)=>({type: TOGGLE_FETCHING, isFetching})