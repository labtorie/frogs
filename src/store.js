const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_INPUT = 'UPDATE-NEW-MESSAGE-INPUT'

export let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            userInfo: {
                id: 22842069,
                profilePictureURL: "",
                name: "Лол",
                surname: "Лягушонок",
                croaks: 36,
                bio: "К сожалению умер.....("
            }
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === SEND_MESSAGE) {
            if (this._state.messagesPage.dialogs[action.chatID].newMessageText === "") return
            let id = this._state.messagesPage.messages[action.chatID].length !== 0 ? this._state.messagesPage.messages[action.chatID].slice(-1)[0].id + 1 : 0;
            this._state.messagesPage.messages[action.chatID].push(
                {
                    messageText: this._state.messagesPage.dialogs[action.chatID].newMessageText,
                    mine: true,
                    id: id
                }
            )
            this._state.messagesPage.dialogs[action.chatID].newMessageText = ""

            this._callSubscriber(this._state)
            return
        }

        if (action.type === UPDATE_MESSAGE_INPUT) {
            let newMessageText = action.text
            this._state.messagesPage.dialogs[action.chatID].newMessageText = newMessageText;
            this._callSubscriber(this._state)
            return
        }

    }


}
export const sendMessageActionCreator = (chatID) => (
    {type: SEND_MESSAGE, chatID: chatID}
)
export const updateNewMessageTextCreator = (text, id) => (
    {type: UPDATE_MESSAGE_INPUT, text: text, chatID: id}
)