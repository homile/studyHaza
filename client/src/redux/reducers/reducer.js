import * as types from "../actions/actionTypes";

const initialState = {
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        isLogin: !state.isLogin,
      };
    case types.LOGIN_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGOUT_USER_INFO:
      return {
        isLogin: !state.isLogin,
        email: "",
        nickName: "",
        photoUrl: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
