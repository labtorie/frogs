import {connect} from "react-redux";
import Chat from "./Chat";
import {
    fetchChatHeaderData,
    fetchMessagesThunk,
    sendMessage,
} from "../../../../redux/messagesPageReducer";
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

    onSendMessage = (formData) => {
        this.props.sendMessage(this.props.match.params.chat, formData.newMessageBody)
    }


    render() {
        return <Chat {...this.props} onSubmit={this.onSendMessage}/>
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
    sendMessage
})(ChatContainer))


