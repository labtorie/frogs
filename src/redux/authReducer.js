import {authAPI} from "../API/API";

const SET_AUTH_STATUS = 'GET-AUTH-STATUS'


const initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false,

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATUS: {
            if (action.isLoggedIn) {
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

            } else return {
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


export const setAuth = (auth) => ({
    type: SET_AUTH_STATUS,
    id: auth.id,
    login: auth.login,
    email: auth.email,
    isLoggedIn: auth.isLoggedIn
})

export const fetchAuth = () => (dispatch) => {
    authAPI.fetchAuth()
        .then(
            (response) => {
                dispatch(setAuth({
                    id: response.data.id,
                    login: response.data.login,
                    email: response.data.email,
                    isLoggedIn: response.resultCode === 0,
                }))
            }
        )
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe).then(
        (response) => {
            if (response.resultCode === 0) {
                dispatch(fetchAuth())
            } else alert(`error: ${response.messages}`) //todo error UI
        }
    )
}
export const logOut = () => (dispatch) => {
    authAPI.logOut().then(
        (response) => {
            if (response.resultCode === 0) {
                dispatch(fetchAuth())
            } else alert('error')
        }
    )
}