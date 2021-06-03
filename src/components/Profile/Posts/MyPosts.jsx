import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post message='Привет'/>
            <Post message='Дарова'/>
        </div>

    )
}

export default MyPosts;