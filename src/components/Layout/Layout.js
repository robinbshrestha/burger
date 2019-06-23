import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

//div is the placeholder for the toolbar, sidedrawer and backdrop
//under there is the main area (the normal main element provided by html)
//which will we will output the component we wrap with this layout

//we will create a aux HOC to wrap something to make it work

