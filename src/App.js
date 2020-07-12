import React from 'react';
import AppGrid from "./components/app_grid/AppGrid";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter basename={'/frogs'}>
                <AppGrid />
        </BrowserRouter>
    )
}

export default App;
