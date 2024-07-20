import React from "react";
import s from './Dialogs.module.css';
import {useMatch} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.state.message.map(m => <Message key={m.id} message={m.message}/>)
    const dialogsItemsMatch = useMatch('/')

    let newMessage = () => {
        props.onNewMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={dialogsItemsMatch && s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.changer}>
                <div>
                    <textarea onChange={onMessageChange} value={props.newMessage}></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs