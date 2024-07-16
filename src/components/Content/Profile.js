import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPost} from "../../redux/State";

const Profile = (props) => {
    console.log('Should print props', props)
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     newText={props.state.newText}
                     dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile