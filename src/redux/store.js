import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {userPageReducer} from "./usersPageReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: userPageReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.store=store
export default store;