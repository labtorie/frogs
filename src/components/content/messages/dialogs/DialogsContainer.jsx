import {connect} from "react-redux";
import React from 'react'
import Dialogs from "./Dialogs";
import {fetchDialogsThunk} from "../../../../redux/messagesPageReducer";
import {compose} from "redux";

class DialogsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDialogsThunk()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dialogs.lastItem !== this.props.dialogs.lastItem)
            this.props.fetchDialogsThunk()
    }

    render() {
        return <Dialogs {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
}

export default compose(
    connect(mapStateToProps, {fetchDialogsThunk}),
)
(DialogsContainer)

