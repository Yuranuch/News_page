import styles from "./LoginPage.module.css";
import {reduxForm} from "redux-form";
import React, {Component} from "react"

class LoginForm extends Component {
    render() {
        return (
            <form className={styles.loginForm}>
                <div>
                    <input placeholder="enter email" onChange={this.props.onChangeEmail} value={this.props.email}/><span>correct email (yoyo@mail.ru)</span>
                </div>
                <div>
                    <input placeholder="enter login" onChange={this.props.onChangeLogin} value={this.props.login}/><span>correct login (yoyo)</span>
                </div>
                <div>
                    <input placeholder="enter you name" onChange={this.props.onChangeUserName}
                           value={this.props.userName}/><span>enter you name</span></div>
                <div>
                    <button onClick={this.props.onChangeForm}>Login</button>
                </div>
            </form>
        )
    }
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)