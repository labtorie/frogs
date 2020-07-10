import React from 'react'
import "./AppGrid.css"
import Menu from "./menu/Menu";
import ContentWrapper from "./content/ContentWrapper";
import HeaderContainer from "./header/HeaderContainer";


const AppGrid = (props) => {
    return (
        <div className='app-grid'>
            <HeaderContainer/>
            <Menu/>
            <ContentWrapper/>
        </div>
    )
}

export default AppGrid