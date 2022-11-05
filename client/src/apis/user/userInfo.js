import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUserInfo, logoutUserInfo } from "../../redux/actions";

const auth = getAuth();

export const UserInfo = async () => {
  const dispatch = useDispatch();
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        loginUserInfo({
          isLogin: true,
          email: user.email,
          nickName: user.displayName,
          photoUrl: `${user.photoURL !== null ? user.photoURL : ""}`,
        })
      );
    } else {
      dispatch(logoutUserInfo());
    }
  });
};

const useUserInfo = async () => {
  await UserInfo();
};

export default useUserInfo;
