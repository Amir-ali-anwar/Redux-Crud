import {
  GET_TODO_BEGIN,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO_BEGIN,
  ADD_TODO_BEGIN,
} from "../utils/actions";
import customFetch from "../utils/axios";
export const fetchTodos = () => {
  return async function (dispatch) {
    dispatch(fetchTodoRequest());
    try {
      const res = await customFetch.get("/users");
      dispatch(fetchTodoSuccess(res?.data));
    } catch (error) {
      dispatch(fetchTodoFailure(error.message));
    }
  };
};

export const fetchTodoRequest = () => {
  return {
    type: GET_TODO_BEGIN,
  };
};
export const fetchTodoSuccess = (users) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: users,
  };
};
export const fetchTodoFailure = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO_BEGIN,
    // payload:id
    payload:customFetch.delete(`/users/${id}`)
  };
};
export const addTodo=(user)=>{
return {
  type: ADD_TODO_BEGIN,
  payload: customFetch.post("/users", user),
};
}