import { createSelector } from "reselect";
import { store } from "../store.js";

const selectState = () => store.getState();

const selectAccountState = createSelector(
  selectState,
  (state) => state.account
);

export const selectIsSignedIn = createSelector(
  selectAccountState,
  (state) => state.signedIn
);

export const selectDisplayName = createSelector(
  selectAccountState,
  (state) => state.displayName
);

export const selectEmail = createSelector(
  selectAccountState,
  (state) => state.email
);

export const selectUser = createSelector(
  selectAccountState,
  (state) => state.user
);

export const selectAccountType = createSelector(
  selectAccountState,
  (state) => state.accountType
);

export const selectIsTeacher = createSelector(
  selectAccountType,
  (type) => type === "teacher"
);

export const selectIsStudent = createSelector(
  selectAccountType,
  (type) => type === "student"
);

export const selectClassList = createSelector(
  selectAccountState,
  (state) => state.classList
);

export const selectModuleList = createSelector(
  selectAccountState,
  (state) => state.moduleList
);

export const selectUID = createSelector(
  selectAccountState,
  (state) => state.uid
);

