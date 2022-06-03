import {LOGIN} from '../constants/index';
import {LOGOUT} from '../constants/index';
const initialState = {
  authToken: null,
  userData: null,
  isLoggedIn: false,
};
const authReducers = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        authToken: payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        authToken: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
export default authReducers;
