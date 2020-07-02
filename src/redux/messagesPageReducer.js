const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT'

const initialState = {
    dialogs: [
        {
            id: 0,
            img: "https://static.vibe.com/files/2017/05/Lil-Uzi-Vert-photo-1494953208-650x366.jpg",
            name: "Lil Uzi",
            newMessageText: ""
        },
        {
            id: 1,
            img: "https://bstars.ru/media/djcatalog2/images/item/17/playboi-carti.1_f.jpg",
            name: "Playboi Carti",
            newMessageText: ""
        },
        {
            id: 2,
            img: "https://avatars.mds.yandex.net/get-ynews/56393/c75e2863dcdd080c632437162daccc65/orig",
            name: "Lil Pump",
            newMessageText: ""
        },
        {
            id: 3,
            img: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/167/259/3.jpg",
            name: "6ix 9ine",
            newMessageText: ""
        }

    ],
    messages: [
        [
            {
                messageText: "Glock switch, Glock switch (Brrt), Glock switch (Brrt), Glock switch (Brrt)\n" +
                    "I just ran from 12 in Audi R8, this ain't stock shit (Skrrt)\n" +
                    "I got so much blue, my pocket GS9, I'm on my hot shit (Yeah, woo)\n" +
                    "Cancel all my shows so I just started on some stock shit (Money)",
                mine: false,
                id: 0
            }
        ],
        [
            {
                messageText: "We started rappin', nigga\n" +
                    "These all black diamonds, nigga\n" +
                    "Hang out with robbers, nigga\n" +
                    "What you know about robbin' niggas?",
                mine: false,
                id: 0
            }
        ],
        [
            {
                messageText: "gucci gang gucci gang",
                mine: false,
                id: 0
            }
        ],
        [
            {
                messageText: "kekekekke",
                mine: false,
                id: 0
            }
        ]

    ]
}

export const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.dialogs[action.chatID].newMessageText === "") return
            let id = state.messages[action.chatID].length !== 0 ? state.messages[action.chatID].slice(-1)[0].id + 1 : 0;
            state.messages[action.chatID].push(
                {
                    messageText: state.dialogs[action.chatID].newMessageText,
                    mine: true,
                    id: id
                }
            )
            state.dialogs[action.chatID].newMessageText = ""
            return state

        case UPDATE_MESSAGE_INPUT:
            let newMessageText = action.text
            state.dialogs[action.chatID].newMessageText = newMessageText;
            return state
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