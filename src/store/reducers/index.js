import { combineReducers } from 'redux';
import counterReducer from './counter';
import counterReducer2 from './counter2';

export default combineReducers({
  counter: counterReducer,
  counter2: counterReducer2
});
