import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    debugger;
    return {
        posts: state.profilePage.posts,
        newText: state.profilePage.newText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch (addPostActionCreator())
            dispatch(updateNewPostActionCreator(''))
        },
        updateNewPostText: (text) => {
            dispatch (updateNewPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer