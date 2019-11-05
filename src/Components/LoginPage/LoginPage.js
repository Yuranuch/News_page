import React, {Component} from "react"

import styles from "./LoginPage.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class LoginPage extends Component {
    state = {
        email: "1111",
        login: "1111",
        userName: "Yura",
    }

    onChangeEmail = (e) => {
        const currentEmail = e.currentTarget.value
        this.setState({
            email: currentEmail
        })

    }
    onChangeLogin = (e) => {
        const currentLogin = e.currentTarget.value
        this.setState({
            login: currentLogin
        })
    }
    onChangeUserName = (e) => {
        const currentUserName = e.currentTarget.value
        this.setState({
            userName: currentUserName
        })
    }
    onChangeForm = () => {
        this.props.changeLoginForm(this.state.email, this.state.login, this.state.userName)
    }

    render() {

        if(this.props.isAuth) return <Redirect to ={"/profile"}/>
        return (
            <div className={styles.login}>
                <h3>Login</h3>

                <form>
                    <div><input onChange={this.onChangeEmail} value ={this.state.email}/><span> - correct login (yoyo@mail.ru) </span></div>
                    <div><input onChange={this.onChangeLogin} value ={this.state.login}/><span> - correct login (yoyo) </span></div>
                    <div><input onChange={this.onChangeUserName} value ={this.state.userName}/><span> - enter you name </span></div>
                    <div>
                        <button onClick={this.onChangeForm}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        isAuth: state.isAuth,
    }
}

export default connect (mapStateToProps, null)(LoginPage)