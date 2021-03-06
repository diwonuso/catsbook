import React from "react";
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>Профиль</div>
            <div>Сообщения</div>
            <div>Новости</div>
            <div>Настройки</div>
            <div>Музыка</div>
        </nav>
    );
}

export default Navbar;