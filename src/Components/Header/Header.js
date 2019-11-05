import React from "react"
import Navigation from "./Navigation/Navigation"
import styles from "./Header.module.css"
import AuthContainer from "./AuthContainer/AuthContainer";

function Header() {
    return (
        <div className={styles.header}>
            <Navigation />
            <AuthContainer/>
        </div>
    );
}
export default Header;