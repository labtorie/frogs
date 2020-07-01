import {rerenderUI} from "./render";

export let state = {
    messagesPage: {
        dialogs: [
            {id: 0, img: "https://i.ytimg.com/vi/GIga8SfF7QY/maxresdefault.jpg", name: "John Poop"},
            {id: 1, img: "https://sun9-23.userapi.com/c855232/v855232372/ab287/6Bkig0-RzUc.jpg", name: "Patrick Onwuka"},
            {
                id: 2,
                img: "data:image/jpeg;base64,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",
                name: "Vladimir Putin"
            },
            {
                id: 3,
                img: "https://thumbs.dfs.ivi.ru/storage28/contents/2/5/c79d212835c86d3f51ef5891f0153f.jpg",
                name: "Ryan Gosling"
            },
            {
                id: 4,
                img: "https://images11.esquire.ru/upload/img_cache/066/06683e8a8c321cad15fb9cc4f9ed7f18_ce_5000x3119x0x55_cropped_960x600.jpg",
                name: "Jesus Christ"
            }

        ],
        messages: [
            [
                {
                    messageText: "Why are you poop",
                    mine: true,
                    id: 0
                },
                {
                    messageText: "Fuck off!!",
                    mine: false,
                    id: 1
                },
                {
                    messageText: "haha jon poop",
                    mine: true,
                    id: 2
                },
                {
                    messageText: "retard",
                    mine: false,
                    id: 3
                }
            ],
            [
                {
                    messageText: "HI!!!",
                    mine: true,
                    id: 0
                }
            ],
            [{
                messageText: "Здравствуйте!",
                mine: true,
                id: 1
            },
                {
                    messageText: "Блять, да мне похуй на тебя, блять, слушай, какая у тебя там тачка,\n" +
                        "блять, квартиры, срачки там блять, яхты, всё, мне похуй, хоть там\n" +
                        "\"Бэнтли\", хоть блять нахуй \"Майбах\", хоть \"Роллс-Ройс\", хоть \"Бугатти\"\n" +
                        "блять, хоть стометровая яхта, мне на это насрать, понимаешь? Сколько ты\n" +
                        "там, кого ебешь, каких баб, каких значит вот этих самок шикарных или\n" +
                        "атласных, блять, в космос ты летишь, мне на это насрать, понимаешь? Я,\n" +
                        "блять, в своем познании настолько преисполнился, что я как будто бы уже\n" +
                        "сто триллионов миллиардов лет, блять, проживаю на триллионах и\n" +
                        "триллионах таких же планет, как эта Земля, мне этот мир абсолютно\n" +
                        "понятен, и я здесь ищу только одного, блять, - покоя, умиротворения и\n" +
                        "вот этой гармонии, от слияния с бесконечно вечным, от созерцания\n" +
                        "великого фрактального подобия и от вот этого замечательного всеединства\n" +
                        "существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно\n" +
                        "малое, хоть ввысь - бесконечное большое, понимаешь? А ты мне опять со\n" +
                        "своим вот этим блять, иди суетись дальше, это твоё распределение, это\n" +
                        "твой путь и твой горизонт познания и ощущения твоей природы, он\n" +
                        "несоизмеримо мелок по сравнению с моим, понимаешь? Я как будто бы уже\n" +
                        "давно глубокий старец, бессмертный, ну или там уже почти бессмертный,\n" +
                        "который на этой планете от её самого зарождения, ещё когда только Солнце\n" +
                        "только-только сформировалось как звезда, и вот это газопылевое облако,\n" +
                        "вот, после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало\n" +
                        "формировать вот эти коацерваты, планеты, понимаешь, я на этой Земле уже\n" +
                        "как будто почти пять миллиардов лет блять живу и знаю её вдоль и поперёк\n" +
                        "этот весь мир, а ты мне какие-то... мне похуй на твои тачки, на твои\n" +
                        "блять нахуй яхты, на твои квартиры, там, на твоё благо. Я был на этой\n" +
                        "планете бесконечным множеством, и круче Цезаря, и круче Гитлера, и круче\n" +
                        "всех великих, понимаешь, был, а где-то был конченым говном, ещё хуже,\n" +
                        "чем здесь. Я множество этих состояний чувствую. Где-то я был больше\n" +
                        "подобен растению, где-то я больше был подобен птице, там, червю, где-то\n" +
                        "был просто сгусток камня, это всё есть душа, понимаешь? Она имеет грани\n" +
                        "подобия совершенно многообразные, бесконечное множество. Но тебе этого\n" +
                        "не понять, поэтому ты езжай себе блять, мы в этом мире как бы живем\n" +
                        "разными ощущениями и разными стремлениями, соответственно, разное наше и\n" +
                        "место, разное и наше распределение. Тебе я желаю все самые крутые тачки\n" +
                        "чтоб были у тебя, и все самые лучше самки чтобы раздвигали ноги перед\n" +
                        "тобой, чтобы раздвигали перед тобой щели, на шиворот-навыворот, блять,\n" +
                        "перед тобой, как ковёр, это самое, раскрывали, растлевали, растлали, и\n" +
                        "ты их чтобы ебал до посинения, докрасна, вон, как Солнце закатное, и\n" +
                        "чтоб на лучших яхтах, и на самолётах летал, и кончал прямо с\n" +
                        "иллюминатора, и делал всё, что только в голову могло прийти и не прийти,\n" +
                        "если мало идей, обращайся ко мне, я тебе на каждую твою идею предложу\n" +
                        "сотню триллионов, как всё делать. Ну а я всё, я иду как глубокий старец,\n" +
                        "узревший вечное, прикоснувшийся к Божественному, сам стал богоподобен и\n" +
                        "устремлен в это бесконечное, и который в умиротворении, покое,\n" +
                        "гармонии, благодати, в этом сокровенном блаженстве пребывает,\n" +
                        "вовлеченный во всё и во вся, понимаешь, вот и всё, в этом наша разница.\n" +
                        "Так что я иду любоваться мирозданием, а ты идёшь преисполняться в ГРАНЯХ\n" +
                        "каких-то, вот и вся разница, понимаешь, ты не зришь это вечное\n" +
                        "бесконечное, оно тебе не нужно. Ну зато ты, так сказать, более активен,\n" +
                        "как вот этот дятел долбящий, или муравей, который очень активен в своей\n" +
                        "стезе, поэтому давай, наши пути здесь, конечно, имеют грани подобия,\n" +
                        "потому что всё едино, но я-то тебя прекрасно понимаю, а вот ты меня -\n" +
                        "вряд ли, потому что я как бы тебя в себе содержу, всю твою природу, она\n" +
                        "составляет одну маленькую там песчиночку, от того что есть во мне, вот и\n" +
                        "всё, поэтому давай, ступай, езжай, а я пошел наслаждаться нахуй блять\n" +
                        "прекрасным осенним закатом на берегу теплой южной реки. Всё,\n" +
                        "пиздуй-бороздуй, и я попиздил, нахуй",
                    mine: false,
                    id: 2
                }],
            [
                {
                    messageText: "HI!!!",
                    mine: true,
                    id: 0
                },
                {
                    messageText: "....",
                    mine: false,
                    id: 1
                },
                {
                    messageText: "......",
                    mine: false,
                    id: 2
                },
                {
                    messageText: "hello.",
                    mine: false,
                    id: 3
                }],
            [],
        ]
    },
    profilePage: {
        userInfo: {
            id: 22842069,
            profilePictureURL: "",
            name: "Лол",
            surname: "Лягушонок",
            croaks: 420,
            bio: "царство небесное ему епта("
        }
    }
}
export let funcs = {
    messagesPage: {
        chatPage: {
            sendMessage: (text, chatID) => {
                debugger;
                let id =  state.messagesPage.messages[chatID].length !== 0 ? state.messagesPage.messages[chatID].slice(-1)[0].id + 1 : 0;
                state.messagesPage.messages[chatID].push(
                    {
                    messageText: text,
                        mine: true,
                        id: id
                }
                )
                debugger;
                rerenderUI(state, funcs);
            }
        }
    }
}