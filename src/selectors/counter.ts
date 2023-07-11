import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const selectCounter = createSelector(store.getState, state => state.counter);
export const selectCount = createSelector(selectCounter, ({ value }) => value);

export const selectDoubleCount = createSelector(selectCount, count => count * 2);
