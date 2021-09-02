import { createSelector } from "reselect";
import { store } from "../store.js"

const selectState = () => store.getState();

const selectAccountState = createSelector(
    selectState,
    state => state.account
)

export const selectIsSignedIn = createSelector(
    selectAccountState,
    state => state.signedIn
)