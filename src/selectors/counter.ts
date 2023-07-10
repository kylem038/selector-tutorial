import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectCount = createSelector(store.getState, state => state.counter.value);

export const selectDoubleCount = createSelector(selectCount, count => count * 2);
