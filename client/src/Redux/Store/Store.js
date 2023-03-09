import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk";
import { postReducer } from "../Post/Reducer";
const rootReducers=combineReducers({

    posts:postReducer,

});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))