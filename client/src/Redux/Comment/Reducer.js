import { CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT } from "./ActionType"

const initialState={
    createdComment:null,
    postComments:null,
    likedComment:null,
}

export const commentReducer=(store=initialState,{type,paylaod})=>{
    if(type===CREATE_COMMENT){
        return {...store, createdComment:paylaod}
    }
    else if(type===GET_POST_COMMENT){
        return {...store, postComments:paylaod}
    }
    else if(type===LIKE_COMMENT){
        return {...store, likedComment:paylaod}
    }
    return store;
}