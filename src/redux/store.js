import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {userPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store=store
export default store;