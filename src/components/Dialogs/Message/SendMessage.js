import React from "react";
import s from './../Dialogs.module.css';
import {newMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/State";


const SendMessage = (props) => {
    let newMessage = () => {
        // let text = e.target.value;
        props.dispatch(newMessageActionCreator())
    }

    let onMessageChange = (e) => {
        props.dispatch(updateNewMessageActionCreator(e.target.value))
    }
    return <div className={s.message}>
        <div>
            <textarea onChange={onMessageChange} value={props.newMessage}></textarea>
        </div>
        <div>
            <button onClick={newMessage}>Send</button>
        </div>
    </div>
}


export default SendMessage