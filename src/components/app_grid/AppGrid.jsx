import React from 'react'
import Header from "./header/Header";
import "./AppGrid.css"
import Menu from "./menu/Menu";
import ContentWrapper from "./content/ContentWrapper";


const AppGrid = (props) => {
    return (
        <div className='app-grid'>
            <Header/>
            <Menu/>
            <ContentWrapper state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default AppGrid