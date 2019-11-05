import React, {Component} from "react"
import styles from "./ProfilePage.module.css"
import {connect} from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import {Redirect, Route} from "react-router-dom";


class ProfilePage extends Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div className={styles.profile}>
                {this.props.isAuth ? <Redirect to={"/profile"}/> : <Redirect to={"/login"}/>}
                <Route path='/login' render={() => <LoginPage/>}/>
                PROFILE PAGE
                <div className={styles.infoAboutWrap}>
                    <div className={styles.photo}>
                        <img alt="" src="https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg"/>
                    </div>
                    <div className={styles.aboutBlock}>
                        {!this.state.editMode?<span onClick={this.activateEditMode}>111111111111111</span>:
                        <textarea onBlur={this.deActivateEditMode} autoFocus={true}/>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        userInfo: state.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfilePage) ;


