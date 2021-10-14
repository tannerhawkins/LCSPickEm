import { classDataDb } from "../../data/firebase";

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

export const refreshClassData = (currentClass) => {
  classDataDb
    .doc(currentClass?.cid)
    .get()
    .then((doc) => setCurrentClass(doc.data()));
};
