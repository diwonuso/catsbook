import React from "react";
import styles from "./Post.module.css";


function Post(props) {
    return (
        <div>
                <div className={styles.item}>
                    <img src='https://shutniki.club/wp-content/uploads/2019/12/narisovat_Avatar_legenda_ob_Aange_31_15183840.jpg'/>
                    {props.message}
                </div>
        </div>

    )
}

export default Post;