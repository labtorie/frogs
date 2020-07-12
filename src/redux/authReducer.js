import {authAPI} from "../API/API";

const SET_AUTH_STATUS = 'GET-AUTH-STATUS'
const UPDATE_PASSWORD = 'UPDATE-PASSWORD'
const UPDATE_EMAIL = 'UPDATE_EMAIL'

const initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,
    fields: {
        email: "",
        password: ""
    }

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL: {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    email: action.text
                }
            }
        }
        case UPDATE_PASSWORD: {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    password: action.text
                }
            }
        }
        case SET_AUTH_STATUS: {
            if (action.isLoggedIn){
                return {
                    id: action.id,
                    login: action.login,
                    email: action.email,
                    isLoggedIn: action.isLoggedIn,
                    fields: {
                        email: "",
                        password: ""
                    }
                }

            }
            else return {
                id: null,
                login: null,
                email: null,
                isLoggedIn: false,
                fields: {
                    email: "",
                    password: ""
                }
            }

        }
        default:
            return state
    }

}

export const updateFields = (isPasswordField, text) => {
    return isPasswordField ? {type: UPDATE_PASSWORD, text} : {type: UPDATE_EMAIL, text}

} //todo u kno fields...

export const setAuthStatus = (auth) => ({
    type: SET_AUTH_STATUS,
    id: auth.id,
    login: auth.login,
    email: auth.email,
    isLoggedIn: auth.isLoggedIn
})

export const logIn = (email, password) => (dispatch) => {
    authAPI.logIn(email, password).then(
        (response)=>{
            if (response.resultCode===0) {
                alert('u logged in, refresh pls')
                //todo u kno
            }
            else alert(`error: ${response.messages}`)
        }
    )
}
export const logOut = () => (dispatch) => {
    authAPI.logOut().then(
        (response)=>{
            if (response.resultCode===0) {
                alert('u logged out, refresh')
                //todo u kno
            }
            else alert('error')
        }
    )
}