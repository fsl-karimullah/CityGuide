import {LOGIN} from '../constants/index';
import {LOGOUT} from '../constants/index';

export const loginAction = (username, password) => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};
export const logoutAction = () => {
  return {
    type: 'LOGOUT',
  };
};
// export const registerAction = (userData) => {
//     return {
//         type: REGISTER,
//         payload: userData,
//     };
//     }
