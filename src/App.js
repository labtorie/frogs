import React from 'react';
import AppGrid from "./components/AppGrid";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return !this.props.initialized
            ?
            <h1>loading</h1>
            :
            (
                <BrowserRouter basename={'/frogs'}>
                    <AppGrid/>
                </BrowserRouter>
            )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
export default connect(mapStateToProps, {initializeApp})(App);
