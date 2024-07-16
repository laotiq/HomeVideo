import React from "react";
import s from './../Dialogs.module.css';
import {newPostActionCreator} from "../../../redux/State";


const Message = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}


export default Message