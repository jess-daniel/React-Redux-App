import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  joke: {
    category: "Programming",
    type: "",
    setup: "",
    delivery: "",
    joke: "",
    id: 1
  },
  isFetching: false,
  error: ""
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        joke: action.payload,
        isFetching: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
