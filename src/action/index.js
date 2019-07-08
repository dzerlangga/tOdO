import { ADD_ARTICLE,TODO_REMOVE, TODO_UPDATE  } from "../constant/type";

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
  }

export function RemoveTodo(payload){
  return { type: TODO_REMOVE , payload}
}

export function UpdateTodo(payload) {
  const type = 'type' in payload
  if (!type) {
    Object.assign(payload, { type: 'ON_EDIT' })
  }
  return {
    type: TODO_UPDATE,
    payload
  }
}

export function addArticle(payload) {
    return { type:ADD_ARTICLE, payload }
};