import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  email: '',
  nickName: '',
  photoUrl: '',
};

const loginReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isLogin = true;
    },
    loginUserInfo(state, action) {
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
      state.photoUrl = action.payload.photoUrl;
    },
    logoutUserInfo(state) {
      state.isLogin = false;
      state.email = '';
      state.nickName = '';
      state.photoUrl = '';
    },
  },
});

export default loginReducer;
