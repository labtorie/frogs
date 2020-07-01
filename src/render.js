import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export let rerenderUI = (state, funcs) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} funcs={funcs}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}