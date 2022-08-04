import * as types from '../actions/actionTypes';

const initialState = {
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOGIN_SUCCESS:
      return {
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
}

export default loginReducer;