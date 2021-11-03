import { createSelector } from "reselect";
import { store } from "./store.js";

const selectState = () => store.getState();

const selectAppState = createSelector(
  selectState,
  (state) => state.app
);

export const selectIsLoading = createSelector(
    selectAppState,
    (state) => state.loading
  );
