import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState =  {
    posts: [
        {post: 'Yo', like: '3'},
        {post: 'Hey', like: '2'}
    ],
    newText: 'taks',
    profile: null
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
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
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
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const profileThunkCreator = (id) => {
    return (dispatch) => {
        let userID = id;
        if (userID) {
            usersAPI.profileUsers(userID).then((response) => {
                dispatch(setUserProfile(response.data))
            })
        } else {
            usersAPI.consProfilesUser().then((response) => {
                dispatch(setUserProfile(response.data))
            })
        }
    }
}

export default profileReducer;