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

export const selectDisplayName = createSelector(
    selectAccountState,
    state => state.displayName
)

export const selectEmail = createSelector(
    selectAccountState,
    state => state.email
)

export const selectUser = createSelector(
    selectAccountState,
    state => state.user
)