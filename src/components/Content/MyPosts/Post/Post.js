import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://space538.org/wp-content/uploads/2015/04/images_cat.jpg'/>
            {props.message}
            <div>
                <span>Like</span> { props.like }
            </div>
        </div>
    )
};

export default Post