import {usersAPI} from "../api/api";

const SET_USER_STATE = 'SET_USER_STATE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_STATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_STATE, data: {userId, email, login} })
export const setUsersThunkCreator = () => {
    return (dispatch) => {
        usersAPI.authUsers().then((data) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login))
            }
        })
    }
}
export default authReducer;