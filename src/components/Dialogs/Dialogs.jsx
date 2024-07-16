import React from "react";
import s from './Dialogs.module.css';
import {useMatch} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./Message/SendMessage";


const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.state.message.map(m => <Message message={m.message}/>)

    const dialogsItemsMatch = useMatch('/')
    return (
        <div className={s.dialogs}>
            <div className={dialogsItemsMatch && s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <SendMessage dispatch={props.dispatch} newMessage={props.state.newMessage}/>
            </div>
        </div>
    )
}

export default Dialogs