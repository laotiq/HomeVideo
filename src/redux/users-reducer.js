let FOLLOW = 'FOLLOW'
let UNFOLOW = 'UNFOLOW'
let SETUSER = 'SETUSER'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = { users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSER: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.currentCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}


export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLOW, userID})
export const setUser = (users) => ({type: SETUSER, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (currentCount) => ({type:SET_TOTAL_USERS_COUNT, currentCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default userReducer;