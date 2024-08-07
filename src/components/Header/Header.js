import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.Header}>
            <img src='https://w7.pngwing.com/pngs/241/840/png-transparent-ensign-flag-italy-nation-flags-icon.png'/>
            <div>
                {props.isAuth ? props.login :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    )
};

export default Header