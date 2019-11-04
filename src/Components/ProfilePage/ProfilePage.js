import React from "react"
import styles from "./ProfilePage.module.css"
import {connect} from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import {Redirect, Route} from "react-router-dom";


function ProfilePage(props) {

  if(props.isAuth === false) return <Redirect to ={"/login"}/>
    return (
        <div className={styles.profile}>
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


