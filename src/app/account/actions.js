import { useDispatch } from "react-redux";
import { auth, userDataDb } from "../../data/firebase";

export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const setPasswordLength = (length) => {
  return {
    type: "SET_PASSWORD_LENGTH",
    payload: length,
  };
};

export const updateClassList = (classList) => {
  return {
    type: "UPDATE_CLASS_LIST",
    payload: classList,
  };
};

export const refreshAccountData = () => {
  const dispatch = useDispatch();

  userDataDb
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => dispatch(signIn(doc.data())));
};
