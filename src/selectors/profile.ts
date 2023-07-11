import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectProfile = createSelector(store.getState, state => state.profile);
export const selectFirstName = createSelector(selectProfile, ({ firstName }) => firstName);
export const selectLastName = createSelector(selectProfile, ({ lastName }) => lastName);
export const selectHiddenContent = createSelector(selectProfile, ({ showContent }) => showContent);