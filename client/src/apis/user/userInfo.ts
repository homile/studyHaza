import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginActions } from "../../redux/reducers/reducer";

const auth = getAuth();

export const UserInfo = async () => {
  const dispatch = useDispatch();
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        loginActions.loginUserInfo({
          isLogin: true,
          email: user.email,
          nickName: user.displayName,
          photoUrl: `${user.photoURL !== null ? user.photoURL : ""}`,
        })
      );
    } else {
      dispatch(loginActions.logoutUserInfo());
    }
  });
};

export default UserInfo;
