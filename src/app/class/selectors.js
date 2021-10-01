import { createSelector } from "reselect";
import { store } from "../store.js";

const selectState = () => store.getState();

const selectClassState = createSelector(selectState, (state) => state.class);

export const selectCurrentClass = createSelector(
  selectClassState,
  (state) => state.currentClass
);
