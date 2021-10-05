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

export const updateClassList = (classList) => {
  return {
    type: "UPDATE_CLASS_LIST",
    payload: classList,
  };
};
