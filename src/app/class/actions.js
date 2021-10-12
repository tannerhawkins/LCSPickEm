export const setCurrentClass = (classNumber) => {
  return {
    type: "SET_CURRENT_CLASS",
    payload: classNumber,
  };
};

export const addModule = (module) => {
  return {
    type: "ADD_MODULE",
    payload: module,
  };
};
