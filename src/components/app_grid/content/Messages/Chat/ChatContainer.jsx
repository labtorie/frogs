import {connect} from "react-redux";
import Chat from "./Chat";
import {
    fetchChatHeaderData,
    fetchMessagesThunk,
    sendMessage,
    updateNewMessageText
} from "../../../../../redux/messagesPageReducer";
import React from "react";
import {withRouter} from "react-router-dom";


class ChatContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMessagesThunk(this.props.match.params.chat)
        this.props.fetchChatHeaderData(this.props.match.params.chat)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.chat !== this.props.match.params.chat) {
            this.props.fetchMessagesThunk(this.props.match.params.chat)
            this.props.fetchChatHeaderData(this.props.match.params.chat)
        }
    }

    onSendMessage = () => {
        this.props.sendMessage(this.props.match.params.chat, this.props.currentChat.input)
    }

    onTextInputChange = (event) => this.props.updateNewMessageText(event.target.value)

    render() {
        return <Chat {...this.props} onTextInputChange={this.onTextInputChange} onSendMessage={this.onSendMessage}/>
    }

}

const mapStateToProps = (state) => {
    return {
        currentChat: state.messagesPage.currentChat,
        messages: state.messagesPage.messages,
    }
}


export default withRouter(connect(mapStateToProps, {
    fetchMessagesThunk,
    fetchChatHeaderData,
    updateNewMessageText,
    sendMessage
})(ChatContainer))


