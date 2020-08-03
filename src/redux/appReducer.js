import {authAPI} from "../API/API";
import {fetchAuth} from "./authReducer";
import {findAllInRenderedTree} from "react-dom/test-utils";

export const SET_INITIALIZED = 'APP/SET-INITIALIZED'

const initialState = {
    initialized: false
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

const setInitialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(fetchAuth())])
        .then(() => {
            dispatch(setInitialized())
        })
}