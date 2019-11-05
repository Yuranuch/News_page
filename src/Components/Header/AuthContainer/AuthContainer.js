import React from "react"
import styles from "./AuthContainer.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../redux/reducer";

function AuthContainer(props) {

    const onLogOut = () => {
        props.logout()
    }
    return (
        <div className={styles.authContainer}>
            {props.isAuth?<div><span>{props.userName}</span><button onClick={onLogOut}>LogOut</button></div>
                :<NavLink to = "/login" activeClassName={styles.active}>Логин</NavLink>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.NewsPage.isAuth,
        userName: state.NewsPage.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)