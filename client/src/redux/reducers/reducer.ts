import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  isLogin: boolean;
  email: string | null;
  nickName: string | null;
  photoUrl?: string;
}

const initialState: UserInfo = {
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
    loginUserInfo(state, action: PayloadAction<UserInfo>) {
      state.isLogin = true;
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

export const loginActions = loginReducer.actions;

export default loginReducer.reducer;
