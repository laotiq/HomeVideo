import React from "react";
import {newMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const AllDialogsContainer = (props) => {
//     let state = store.getState()
//     let onNewMessage = () => {
//         store.dispatch(newMessageActionCreator())
//         store.dispatch(updateNewMessageActionCreator(''))
//     }
//
//     let onMessageChange = (text) => {
//         store.dispatch(updateNewMessageActionCreator(text))
//     }
//     return (<Dialogs onNewMessage={onNewMessage} onMessageChange={onMessageChange}
//                      state={state.dialogsPage}
//                      />
//     )
// }

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessage: () => {
            dispatch(newMessageActionCreator())
            dispatch(updateNewMessageActionCreator(''))
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}


const AllDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default AllDialogsContainer