import {combineReducers, createStore} from "redux";
import { newsReducer} from "./reducer";
import {reducer as formReducer} from "redux-form"

const reducers = combineReducers({
    NewsPage: newsReducer,
    form: formReducer
})

const store = createStore(reducers)






export default store