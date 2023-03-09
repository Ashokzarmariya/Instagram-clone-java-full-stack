import { CREATE_NEW_POST, GET_USER_POST } from "./ActionType";

export const createPost = (dispatch) => async (data) => {

  const res = await fetch("http://localhost:5454/api/post/create", {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + data.jwt,
    },

    body: JSON.stringify(data.data),

  });

  const resData = await res.json();

  dispatch({type:CREATE_NEW_POST,payload:resData});
  
};

export const findUserPost = (dispatch) => async (data) => {

    const res = await fetch("http://localhost:5454/api/post/user", {
  
      method: "GET",
  
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + data.jwt,
      },
  
      body: JSON.stringify(data.data),
  
    });
  
    const resData = await res.json();
  
    dispatch({type:GET_USER_POST,payload:resData});
    
};
