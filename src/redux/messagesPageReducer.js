import {messagesAPI, profileAPI} from "../API/API";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT'
const SET_DIALOGS = 'SET-DIALOGS'
const SET_MESSAGES = 'SET-MESSAGES'
const SET_HEADER = 'SET-HEADER'
const PENDING_ON = 'PENDING-ON'
const PENDING_OFF = 'PENDING-OFF'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
    dialogs: [],
    currentChat: {
        id: null,
        name: '',
        photo: '',
        input: ''
    },
    isPending: true,
    messages: []
}

export const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS: {
            if (action.dialogs.length === 0) return {...state, dialogs: []}
            return {
                ...state,
                dialogs: action.dialogs.map(
                    (dialog) => {
                        return {
                            id: dialog.id,
                            userName: dialog.userName,
                            hasNewMessages: dialog.hasNewMessages,
                            newMessagesCount: dialog.newMessagesCount,
                            photo: dialog.photos.small,
                        }
                    }
                )
            }
        }
        case UPDATE_MESSAGE_INPUT: {
            return {
                ...state,
                currentChat: {
                    ...state.currentChat,
                    input: action.text,
                }
            }
        }
        case SET_MESSAGES: {
            return {
                ...state,
                currentChat: {...state.currentChat, id: action.chatID, input: ""},
                messages: action.messages.map(
                    (message) => {
                        return {
                            id: message.id,
                            body: message.body,
                            isMine: action.chatID != message.senderId
                        }
                    }
                )
            }
        }
        case SET_HEADER: {
            return {
                ...state,
                currentChat: {
                    id: state.currentChat.id,
                    name: action.name,
                    photo: action.image
                },
            }
        }
        case ADD_MESSAGE:
        {
            return {
                ...state,
                currentChat: {...state.currentChat, input: ''},
                messages: [
                    ...state.messages,
                    {
                        id: action.id,
                        body: action.body,
                        isMine: true
                    }
                ]
            }
        }
        case PENDING_ON: {
            return{
                ...state,
                isPending: true
            }
        }
        case PENDING_OFF: {
            return{
                ...state,
                isPending: false
            }
        }
        default:
            return state
    }
}

export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs})

export const fetchDialogsThunk = () => (dispatch) => {
    messagesAPI.fetchDialogs().then(
        (response) => {
            dispatch(setDialogs(response))
        }
    )
}

const setMessages = (chatID, messages) => ({type: SET_MESSAGES, chatID, messages})
export const fetchMessagesThunk = (chatID) => (dispatch) => {
    messagesAPI.fetchMessages(chatID)
        .then((messages) => {
                dispatch(setMessages(chatID, messages.items))
            }
        )
}
const setChatHeaderData = (image, name) => ({type: SET_HEADER, image, name})

export const fetchChatHeaderData = (userID) => (dispatch) => {
    profileAPI.fetchProfile(userID, null)
        .then(
            response => {
                dispatch(setChatHeaderData(response.photos.small, response.fullName))
            }
        )
}
const addMessage=(id, body)=>({type: ADD_MESSAGE, id, body})


export const sendMessage = (chatID, text) => (dispatch) => {
    if (text != null && text != '') {
        messagesAPI.sendMessage(chatID, text).then(
            (response) => {
                dispatch(addMessage(response.data.message.id, response.data.message.body))
                dispatch(fetchDialogsThunk())
            }
        )
    }
}

const pendingOn = () => ({type: PENDING_ON})
const pendingOff = () => ({type: PENDING_OFF})


export const updateNewMessageText = (text) => (
    {type: UPDATE_MESSAGE_INPUT, text: text}
)
