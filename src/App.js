import React from 'react';
import AppGrid from "./components/app_grid/AppGrid";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <AppGrid profile={props.profile} dialogs={props.dialogs} messages={props.messages}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
