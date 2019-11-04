import React from "react"
import Navigation from "./Navigation/Navigation"
import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header}>
            <Navigation />
        </div>
    );
}
export default Header;