import {
  GET_TODO_BEGIN,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  DELETE_TODO_BEGIN,
  ADD_TODO_BEGIN,
} from "../utils/actions";
const initialState = {
  isLoading: false,
  data: [],
  isError: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_TODO_ERROR:
      return {
        isLoading: false,
        data: [],
        isError: action.payload,
      };
    case DELETE_TODO_BEGIN:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TODO_BEGIN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
