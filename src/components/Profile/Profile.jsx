import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./Posts/MyPosts";


function Profile() {
    return (
        <div className={styles.content}>
            <div> ava + discription</div>
            <MyPosts/>
        </div>

    );
}

export default Profile;