import {createStore, combineReducers} from 'redux';
import authReducers from '../reducers/auth';
const rootReducer = combineReducers({authReducers});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
