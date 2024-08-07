import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

window.store = store

export default store
