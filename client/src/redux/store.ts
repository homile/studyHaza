import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/reducer';

const store = configureStore({ reducer: { loginReducer: loginReducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
