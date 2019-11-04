import React from "react"
import styles from "./Navigation.module.css"
import {NavLink} from "react-router-dom";
function Navigation() {
    return (
        <div className={styles.navigation}>
            <NavLink to ="/main" activeClassName={styles.active}>Главная</NavLink>
            <NavLink to = "/login" activeClassName={styles.active}>Логин</NavLink>
            <NavLink to = "/news" activeClassName={styles.active}>Новости</NavLink>
            <NavLink to = "/profile" activeClassName={styles.active}>Профайл</NavLink>
        </div>
    );
}
export default Navigation;