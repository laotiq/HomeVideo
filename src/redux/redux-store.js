import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

const store = createStore(reducers)



export default store
