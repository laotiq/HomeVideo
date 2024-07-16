import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPost, updateNewPostActionCreator} from "../../../redux/State";



const MyPosts = (props) => {
    let postElements =
        props.posts.map( p => <Post message={p.message} like={p.like}/>)
    let addPost = () => {
        props.dispatch (addPostActionCreator())
        props.dispatch(updateNewPostActionCreator(''))
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     console.log(text);
    //     props.updateNewPost(text)
    // }

    return (
        <div className={s.MyPosts}>
            <div className={s.postBlock}>
                <h2>New Post</h2>
            </div>
            <div>
                {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newText}></textarea>*/}
                <textarea onChange={onPostChange} value={props.newText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Text</button>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts