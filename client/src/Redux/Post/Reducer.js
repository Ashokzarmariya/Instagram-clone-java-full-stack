import {CREATE_NEW_POST, GET_USER_POST} from "./ActionType";

const initialState = {
  createdPost:null,
  userPost:null
  
};



export const postReducer=(store=initialState, {type,payload})=>{

    if(type===CREATE_NEW_POST){
        return {...store, createdPost:payload};
    }
    else if(type===GET_USER_POST){
        return {...store, userPost:payload};
    }

    return store;
}