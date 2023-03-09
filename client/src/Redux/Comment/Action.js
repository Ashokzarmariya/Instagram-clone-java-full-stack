import { LIKE_COMMENT } from "./ActionType";

export const createComment = (dispatch) => async (data) => {
  const res = await fetch("http://localhost:5454/api/comments/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Beare " + data.jwt,
    },
    body: JSON.stringify(data.data),
  });

  const resData=await res.json();

  console.log("created comment", resData);
  dispatch({type:"CREATE_COMMENT",paylod:resData});
};


export const findPostComment=(dispatch)=>async(data)=>{
    const res= await fetch("http://localhost:5454/api/comments/postId",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":'Beare '+data.jwt,
        },
        body:JSON.stringify(data.data)
    })
    const resData=await res.json();
    dispatch({type:"GET_USER_POST",paylod:resData});
}

export const likeComment=(dispatch)=>async(data)=>{
    const res= await fetch("http://localhost:5454/api/comments/commentId",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":'Beare '+data.jwt,
        },
        body:JSON.stringify(data.data)
    })
    const resData=await res.json();
    dispatch({type:LIKE_COMMENT,paylod:resData});
}