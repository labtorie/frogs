const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT'

const initialState = {
    chats: [
        {
            id: 0,
            name: "Playboi Carti",
            profilePictureURL: "https://bstars.ru/media/djcatalog2/images/item/17/playboi-carti.1_f.jpg",
            currentInput: "",
            messages: [
                {
                    id: 0,
                    mine: false,
                    messageText: "They're trynna be crazy"
                },
                {
                    id: 1,
                    mine: true,
                    messageText: "She wanna be Carti"
                }
            ]
        },
        {
            id: 1,
            name: "Lil Pump",
            profilePictureURL: "https://avatars.mds.yandex.net/get-ynews/56393/c75e2863dcdd080c632437162daccc65/orig",
            currentInput: "",
            messages: [
                {
                    id: 0,
                    mine: false,
                    messageText: "эчкере)"
                },
                {
                    id: 1,
                    mine: true,
                    messageText: ")"
                }
            ]
        },

    ]


}

export const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (state.chats[action.chatID].currentInput === "") return state // Empty messages ain't sent
            return {
                ...state,
                chats: state.chats.map(
                    (chat) => {
                        if (chat.id == action.chatID) {
                            return {
                                ...chat, messages: [...state.chats[action.chatID].messages,
                                    {
                                        messageText: state.chats[action.chatID].currentInput,
                                        mine: true,
                                        id: state.chats[action.chatID].messages.length !== 0 ? state.chats[action.chatID].messages.slice(-1)[0].id + 1 : 0
                                    }
                                ],
                                currentInput: ""
                            }

                        } else return chat;
                    }
                )

            }
        }
        case UPDATE_MESSAGE_INPUT: {
            return {
                ...state,
                chats: state.chats.map(
                    (chat) => {
                        if (chat.id == action.chatID){
                            return {
                                ...chat,
                                currentInput: action.text
                            }
                        }
                        else return chat
                    }
                )
            }
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = (chatID) => (
    {type: SEND_MESSAGE, chatID: chatID}
)

export const updateNewMessageTextCreator = (text, id) => (
    {type: UPDATE_MESSAGE_INPUT, text: text, chatID: id}
)