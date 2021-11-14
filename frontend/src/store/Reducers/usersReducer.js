import {REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "../Actions/usersActions";

const initialState = {
  user: null,
  registerError: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {...state, user: action.payload, registerError: null};
    case REGISTER_USER_FAILURE:
      return {...state, registerError: action.payload};
    default:
      return state;
  }
};

export default usersReducer;