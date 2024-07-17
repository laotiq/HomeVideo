import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Yo', like: '3'},
                {message: 'Hey', like: '2'}
            ],
            newText: 'taks'
        },
        dialogsPage: {
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

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Res')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}






export default store;