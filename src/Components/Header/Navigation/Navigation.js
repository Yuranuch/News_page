import React from "react"
import styles from "./Navigation.module.css"
function Navigation() {
    return (
        <div className={styles.navigation}>
            <a href="/">Главная</a>
            <a href="/login">Логин</a>
            <a href="/news">Новости</a>
            <a href="/profile">Профайл</a>
        </div>
    );
}
export default Navigation;