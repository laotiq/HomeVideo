const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const NEW_MESSAGE = 'NEW_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dauren'},
        {id: 2, name: 'Nurzhan'},
        {id: 3, name: 'Birzhan'}
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'}
    ],
    newMessage: 'ds'
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage
            }
        case NEW_MESSAGE:
            let enterMessage = {
                message: state.newMessage,
                id: 3
            }
            return {
                ...state,
                message: [...state.message, enterMessage],
                newMessage: ''
            }
        default:
            return state
    }
}

export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newMessage: text}
}

export const newMessageActionCreator = () => {
    return {type: NEW_MESSAGE}
};

export default dialogReducer;