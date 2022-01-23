import { createSelector } from "reselect";
import { store } from "../store.js";

const selectState = () => store.getState();

const selectAccountState = createSelector(
  selectState,
  (state) => state.account
);

export const selectWeek = createSelector(
  selectAccountState,
  (state) => state.week
)

export const selectWeeks = createSelector(
  selectAccountState,
  (state) => state.weeks
)

export const selectPicks = createSelector(
  selectAccountState,
  (state) => state.picks
)

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

export const selectUser = createSelector(selectAccountState, (state) => state);

export const selectAccountType = createSelector(
  selectAccountState,
  (state) => state.accountType
);

export const selectUID = createSelector(
  selectAccountState,
  (state) => state.uid
);
