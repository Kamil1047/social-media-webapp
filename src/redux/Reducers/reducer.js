import * as types from "../Actions/actionType";

const initialState = {
  posts: [],
  post: {},
  loading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.DELETE_POST:
    case types.ADD_POST:
    case types.EDIT_POST:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
