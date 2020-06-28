import React from 'react'
import Header from "./header/Header";
import "./AppGrid.css"
import Menu from "./menu/Menu";
import Content from "./content/Content";

const AppGrid = () => {
    return (
        <div className='app-grid'>
            <Header/>
            <Menu/>
            <Content/>
        </div>
    )
}

export default AppGrid