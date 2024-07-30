import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount, setUser, toggleIsFetching, unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import preloader from './../../../Assets/images/loader.svg'
import Loader from "../../Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                headers: {
                    'API-KEY': 'c3763275-6111-4462-b4c9-205fba0b3504'
                }
            }).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onSetUserChanger = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                headers: {
                    'API-KEY': 'c3763275-6111-4462-b4c9-205fba0b3504'
                }
            }).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
        })

    }

    render() {
        return <>
            {this.props.isFetching ? <img src={<Loader />}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onSetUserChanger={this.onSetUserChanger}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch (FOLLOWAC(userID))
//         },
//         unfollow: (userId) => {
//             dispatch (UNFOLOWAC(userId))
//         },
//         setUser: (users) => {
//             dispatch (SETUSERSAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch (SETCURRENTPAGEAC(currentPage))
//         },
//         setTotalUsersCount: (currenCount) => {
//             dispatch (SETTOTALUSERSCOUNTAC(currenCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch (ISFETCHIGAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUser,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)
