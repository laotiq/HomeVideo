import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: userReducer
})

const store = createStore(reducers)

window.store = store

export default store
