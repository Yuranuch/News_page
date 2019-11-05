export const SET_USER_DATA = "SET_USER_DATA"
export const LOGOUT = "LOGOUT"

const initialState = {
    email: null,
    login: null,
    userName: null,
    isAuth: false,
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            debugger
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
    }
    return state
}

export const setUserData = (email, login, isAuth, userName) => ({type: SET_USER_DATA, email, login, isAuth,userName})
export const logout = () => ({type: LOGOUT})