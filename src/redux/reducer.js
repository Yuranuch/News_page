export const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
    email: null,
    login: null,
    isAuth: true,
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }
    }
    return state
}

export const setUserData = (email, login) => ({type:SET_USER_DATA, data:{email, login}})