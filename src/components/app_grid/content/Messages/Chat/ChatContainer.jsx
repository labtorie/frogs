import {connect} from "react-redux";
import Chat from "./Chat";
import {sendMessageActionCreator, updateNewMessageTextCreator} from "../../../../../redux/messagesPageReducer";


const mapStateToProps = (state, ownProps) => {
    return {
        currentChat: state.messagesPage.chats[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendMessage: () => dispatch(sendMessageActionCreator(ownProps.id)),
        changeInput: (text) =>  dispatch(updateNewMessageTextCreator(text, ownProps.id)),
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer

