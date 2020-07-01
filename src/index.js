import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./store";

let rerenderUI = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderUI(store.getState());

store.subscribe(rerenderUI);

serviceWorker.unregister();
