import React from 'react';
import styles from'./App.module.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import NewsPage from "./Components/NewsPage/NewsPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";

function App() {

    let changeLoginForm = () => {

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

export default App;
