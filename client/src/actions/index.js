import * as types from './actionTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginUserInfo = (data) => ({
  type: types.LOGIN_USER_INFO,
  payload: data,
});