import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { commentReducer } from "../Comment/Reducer";
import { postReducer } from "../Post/Reducer";


const rootReducers=combineReducers({

    posts:postReducer,
    comments:commentReducer,

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))