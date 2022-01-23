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

export const setWeeks = (weeks) => {
  return {
    type: "SET_WEEKS",
    payload: weeks,
  };
};

export const setPasswordLength = (length) => {
  return {
    type: "SET_PASSWORD_LENGTH",
    payload: length,
  };
};

export const setPicks = (picks) => {
  return {
    type: "SET_PICKS",
    payload: picks,
  };
};

export const setWeek = (week) => {
  return {
    type: "SET_WEEK",
    payload: week,
  };
};

export const refreshAccountData = () => {
  const dispatch = useDispatch();

  userDataDb
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => dispatch(signIn(doc.data())));
};
