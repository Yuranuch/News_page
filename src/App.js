import React from 'react';
import styles from'./App.module.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import NewsPage from "./Components/NewsPage/NewsPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import {connect} from "react-redux";
import {setUserData} from "./redux/reducer";

function App(props) {

    let changeLoginForm = (email, login, userName) => {
        if(email=="yoyo@mail.ru" && login=="yoyo") {
            props.setUserData(email, login, true, userName)
        }else {
            alert("Неправильные данные!")
        }

    }

    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header/>
            </div>
            <div className={styles.container}>
                <Route path='/main' component = {MainPage}/>
                <Route path='/login' render = {()=><LoginPage changeLoginForm={changeLoginForm}/>}/>
                <Route path='/news' component = {NewsPage}/>
                <Route path='/profile' component = {ProfilePage}/>
            </div>
        </BrowserRouter>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (email, login, isAuth, userName) => {
            dispatch(setUserData(email, login, isAuth, userName))
        }
    }
}

export default connect (null, mapDispatchToProps)(App)
