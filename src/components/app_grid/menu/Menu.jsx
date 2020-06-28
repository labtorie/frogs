import React from 'react'
import './Menu.css'

const Item = () => {
    return (
        <div className='item'>
            <p>MENU ITEM</p>
        </div>
    )
}
const Menu = () => {
    return (
        <div className='menu'>
            <img className='logo' src={require("./logo.png")}/>
            <div>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

export default Menu