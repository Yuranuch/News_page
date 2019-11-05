import React, {Component} from "react"

import styles from "./LoginPage.module.css"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./LoginRedux Form";


class LoginPage extends Component {
    state = {
        email: "yoyo@mail.ru",
        login: "yoyo",
        userName: "Yuranuch",
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
        debugger
        const currentUserName = e.currentTarget.value
        this.setState({
            userName: currentUserName
        })
    }
    onChangeForm = () => {
        this.props.changeLoginForm(this.state.email, this.state.login, this.state.userName)
    }

    render() {

        if (this.props.isAuth) return <Redirect to={"/profile"}/>
        return (
            <div className={styles.login}>
                <h2>Login</h2>
                <span
                    className={styles.condInfo}> If you want to go to the Profile page, please fill out the form,</span>
                    <LoginReduxForm
                        onSubmit={this.props.handleSubmit}
                        onChangeUserName={this.onChangeUserName}
                        onChangeEmail={this.onChangeEmail}
                        onChangeLogin={this.onChangeLogin}
                        onChangeForm={this.onChangeForm}
                        email={this.state.email}
                        login={this.state.login}
                        userName={this.state.userName}
                        {...this.props}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.NewsPage.isAuth,
    }
}

export default connect (mapStateToProps, null)(LoginPage)