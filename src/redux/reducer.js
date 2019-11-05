export const SET_USER_DATA = "SET_USER_DATA"
export const LOGOUT = "LOGOUT"
export const CHANGE_PROFILE_INFO = "CHANGE_PROFILE_INFO"

const initialState = {
    email: null,
    login: null,
    userName: null,
    isAuth: false,

}

export const newsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.email,
                login: action.login,
                userName: action.userName,
                isAuth: action.isAuth
            }
        case LOGOUT:
            return {
                ...state,
                email: null,
                login: null,
                userName: null,
                isAuth: false
            }
        case CHANGE_PROFILE_INFO:
            debugger
            return {
                ...state,
                userInfo: action.text
            }
    }
    return state
}

export const setUserData = (email, login, isAuth, userName) => ({type: SET_USER_DATA, email, login, isAuth,userName})
export const logout = () => ({type: LOGOUT})