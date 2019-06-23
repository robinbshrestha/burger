import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = (props) => {
    //...
    return (
        <div>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    );
}

export default sideDrawer;