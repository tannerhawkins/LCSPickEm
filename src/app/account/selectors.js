import { createSelector } from "reselect";
import { store } from "../store.js"
import { auth } from "../../data/firebase.js";

const selectState = () => store.getState();

const selectAccountState = createSelector(
    selectState,
    state => state.account
)

export const selectIsSignedIn = createSelector(
    selectAccountState,
    state => state.signedIn
)