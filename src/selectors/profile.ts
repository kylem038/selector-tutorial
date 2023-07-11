import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectProfile = createSelector(store.getState, state => state.profile);
export const selectFirstName = createSelector(selectProfile, ({ firstName }) => firstName);
export const selectLastName = createSelector(selectProfile, ({ lastName }) => lastName);
export const selectUserOptin = createSelector(selectProfile, ({ userOptin }) => userOptin);
export const selectUserLoggedIn = createSelector(selectProfile, ({ userLoggedIn }) => userLoggedIn);

export const selectShowHiddenContent = createSelector(
    selectUserOptin, 
    selectUserLoggedIn, 
    (optedIn, loggedIn) => optedIn && loggedIn
);