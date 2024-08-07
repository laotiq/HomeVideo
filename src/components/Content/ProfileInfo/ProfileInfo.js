import React from "react";
import s from "./ProfileInfo.module.css"
import Loader from "../../Loader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }
    return (
        <div>
            <div className={s.profileimage}>
                <img
                    src='https://fond-decran.com/wp-content/uploads/2021/06/jujutsu-kaisen-wallpaper-scaled.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
};

export default ProfileInfo