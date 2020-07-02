import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagesPageReducer} from "./messagesPageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer
})

let store = createStore(reducers)
export default store;