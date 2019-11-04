import React from "react"

import styles from "./LoginPage.module.css"

function LoginPage() {
    return (
        <div className={styles.login}>
            <h3>Login</h3>
            <form>
                <div><input /></div>
                <div><input /></div>
                <div><button>Login</button></div>
            </form>
        </div>
    );
}
export default LoginPage;