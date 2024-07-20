const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState =  {
    posts: [
        {post: 'Yo', like: '3'},
        {post: 'Hey', like: '2'}
    ],
    newText: 'taks'
}

const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: state.newText,
                like: '0'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newText: ''
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newText: action.newText
            }
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