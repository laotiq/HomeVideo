const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const NEW_MESSAGE = 'NEW_MESSAGE';

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

    // addPost() {
    //     let newPost = {
    //         message: this._state.profilePage.newText,
    //         like: '0'
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPost(newText) {
    //     this._state.profilePage.newText = newText
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newText,
                like: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === NEW_MESSAGE) {
            let enterMessage = {
                message: this._state.dialogsPage.newMessage,
                id: 3
            }
            this._state.dialogsPage.message.push(enterMessage)
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}

export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newMessage: text}
}

export const newMessageActionCreator = () => {
    return {type: NEW_MESSAGE}
}


export default store;