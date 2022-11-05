import { combineReducers } from 'redux';
import loginReducer from './reducer';

// combineReducers 여러 reducer를 연결하기 위함
const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer