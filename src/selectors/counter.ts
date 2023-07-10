import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

const selectCount = createSelector(store.getState, state => state.counter.value);

export default selectCount;