import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, setTotalUsersCount, setUser, toggleFollowingProgress, toggleIsFetching, unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import preloader from './../../../Assets/images/loader.svg'
import Loader from "../../Loader";
import getUsers, {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetUserChanger = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                   onSetUserChanger={this.onSetUserChanger}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   isFollowingInProgress={this.props.isFollowingInProgress}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUser,
    setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toggleFollowingProgress, getUsers: getUsersThunkCreator
})(UsersContainer)
