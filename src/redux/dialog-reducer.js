const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const NEW_MESSAGE = 'NEW_MESSAGE';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage
            return state
        case NEW_MESSAGE:
            let enterMessage = {
                message: state.newMessage,
                id: 3
            }
            state.message.push(enterMessage)
            return state
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