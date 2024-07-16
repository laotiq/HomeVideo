import React from "react";
import classes from './Footer.module.css';
import {NavLink, useMatch} from "react-router-dom";




const Footer = () => {
    const contentMatch = useMatch('/content');
    const dialogMatch = useMatch('/dialogs');
    const friendsMatch = useMatch('/friends');
    const settingsMatch = useMatch('/settings');
    return (
        <div className={classes.Footer}>
            <div className={classes.item}>
                <NavLink to= '/content' className={contentMatch && classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to= '/dialogs' className={dialogMatch && classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to= '/friends' className={friendsMatch && classes.activeLink}>Friends</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to= 'settings' className={settingsMatch && classes.activeLink}>Settings</NavLink>
            </div>
        </div>
    )
};

export default Footer