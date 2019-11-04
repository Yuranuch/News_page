export const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
    email: null,
    login: null,
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
                isAuth: action.isAuth
            }
    }
    return state
}

export const setUserData = (email, login, isAuth) => ({type:SET_USER_DATA, email, login, isAuth})