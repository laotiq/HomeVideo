import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Loader from "../../Loader";
import userPhoto from "../../../Assets/images/user.png";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.users)
    return <div>
        <div>
            {pages.map(p => (
                <span className={props.currentPage === p && styles.selectedPage}
                      onClick={(e) => {
                          props.onSetUserChanger(p)
                      }}>{p}</span>
            ))}
        </div>
        {props.users.map((u) => (<div key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <span>
                {u.name}
            </span>
            <div className={styles.users}>
                {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>UNFOLLOW</button> :
                    <button onClick={() => {
                        props.follow(u.id)
                    }}>FOLLOW</button>}
            </div>
            <span>
                {'u.location.country'}
            </span>
            <div>
                {'u.location.city'}
            </div>
        </div>))}
    </div>
}


export default Users