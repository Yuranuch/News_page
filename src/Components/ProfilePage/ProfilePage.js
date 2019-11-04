import React from "react"
import styles from "./ProfilePage.module.css"
import {connect} from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import {Redirect, Route} from "react-router-dom";


function ProfilePage(props) {



    return (
        <div className={styles.profile}>
            {props.isAuth? <Redirect to ={"/profile"}/>:<Redirect to ={"/login"}/>}
            <Route path='/login' render = {()=><LoginPage/>}/>
            PROFILE PAGE
        </div>
    );
}

const mapStateToProps = (state) => {
    debugger
    return {
        isAuth: state.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfilePage) ;


