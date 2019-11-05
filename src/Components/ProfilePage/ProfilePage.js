import React, {Component} from "react"
import styles from "./ProfilePage.module.css"
import {connect} from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import {Redirect, Route} from "react-router-dom";

class ProfilePage extends Component {
    state = {
        editMode: false,
        userInfo: ""
    }
    componentDidMount() {
        this.restoreState()
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state)
        localStorage.setItem ("our-state", stateAsString)
    }
    restoreState = () => {
        let state = {
            editMode: false,
            userInfo: "Кот Митя свалялся так, что легче было купить нового, чем вычесать этого." +
                " Однако мы решили дать ему шанс, все ж таки не посторонний человек в нашей семье." +
                " Мы решили его обрить. Иначе скоро бы лапы припаялись колтунами к животу. " +
                "Пока я тут безостановочно рожаю детей, оказалось, что на рынке давно и прочно обосновалась услуга стрижки котов. " +
                "Можно стричь подо льва, можно под пуму. Можно выбрить фигурный ирокез. Вариантов стрижки хвоста только пять наименований. " +
                "На когти можно сделать силиконовые насадки! Чтобы кот не драл мебель. Насадки могут быть цветными!!! " +
                "На кота можно наклеить стразы."
        }
        let stateAsString = localStorage.getItem("our-state")
        if(stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
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
    onChangeProfileInfo = (e) => {
        const text = e.currentTarget.value
        this.setState({
            userInfo: text
        },()=>{this.saveState()})
    }

    render() {
        return (
            <div className={styles.profile}>
                {this.props.isAuth ? <Redirect to={"/profile"}/> : <Redirect to={"/login"}/>}
                <Route path='/login' render={() => <LoginPage/>}/>
                <h2>Profile page</h2>
                <div className={styles.infoAboutWrap}>
                    <div className={styles.photo}>
                        <img alt="" src="https://avatarko.ru/img/kartinka/25/zhivotnye_kot_prikol_text_24177.jpg"/>
                    </div>
                    <div className={styles.aboutBlock}>
                        <div className={styles.title}><span>About me</span></div>
                        {!this.state.editMode?<p onClick={this.activateEditMode}>{this.state.userInfo}</p>:
                        <textarea
                            onBlur={this.deActivateEditMode}
                            onChange={this.onChangeProfileInfo}
                            value={this.state.userInfo}
                            autoFocus={true}/>}
                        <div><span className={styles.hint}> - click on the text to change it</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.NewsPage.isAuth,
        userInfo: state.NewsPage.userInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProfilePage) ;


