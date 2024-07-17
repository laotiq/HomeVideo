const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newText,
                like: '0'
            }
            state.posts.push(newPost)
            return state
        case UPDATE_NEW_POST:
            state.newText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}

export default profileReducer;