const SET_AUTH_STATUS = 'GET-AUTH-STATUS'

const initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_STATUS: {
            if (action.isLoggedIn){
                return {
                    id: action.id,
                    login: action.login,
                    email: action.email,
                    isLoggedIn: action.isLoggedIn
                }

            }
            else return {
                id: null,
                login: null,
                email: null,
                isLoggedIn: false
            }

        }
        default:
            return state
    }

}

export const setAuthStatus = (auth) => ({
    type: SET_AUTH_STATUS,
    id: auth.id,
    login: auth.login,
    email: auth.email,
    isLoggedIn: auth.isLoggedIn
})
