import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectFirstName = createSelector(store.getState, state => state.profile.firstName);
export const selectLastName = createSelector(store.getState, state => state.profile.lastName);
