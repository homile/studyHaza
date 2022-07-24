import { createStore } from "redux";
import rootReducer from './reducers/index';

// rootReducer 여러 Reducer들을 모아둔 곳
const store = createStore(rootReducer);

export default store;