import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/store"

let renderUI = (state) => { // Renders the app
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderUI(store.getState()); // Initial call

store.subscribe(() => { // We send this callback to listen state changes
        let state = store.getState()
        renderUI(state)
    }
);

serviceWorker.unregister(); // TODO ????
