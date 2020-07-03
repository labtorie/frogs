import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        chats: state.messagesPage.chats,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

