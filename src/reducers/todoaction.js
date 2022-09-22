import {
  GET_TODO_BEGIN,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "../utils/actions";
import customFetch from "../utils/axios";
import axios from "axios";
export const fetchTodos = () => {
  return async function (dispatch) {
    dispatch(fetchTodoRequest());
    try {
      const res = await customFetch.get("/users");
      const data = await res;
      dispatch(fetchTodoSuccess(data?.data));
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
