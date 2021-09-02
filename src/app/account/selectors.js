import { createSelector } from "reselect";
import { store } from "../store.js"

const selectState = () => store.getState();

export const selectIsSignedIn = createSelector(
    selectState,
    state => state.signedIn
)