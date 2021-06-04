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
            <Post message='Привет' likeCounts='Likes 23'/>
            <Post message='Дарова' likeCounts='Likes 12'/>
        </div>

    )
}

export default MyPosts;