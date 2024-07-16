import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileimage}>
                <img
                    src='https://www.funnyart.club/uploads/posts/2023-02/1675540529_www-funnyart-club-p-kot-mem-kartinki-18.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Kussaiyn
            </div>
        </div>
    )
};

export default ProfileInfo