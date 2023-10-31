import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectTodos = createSelector(store.getState, state => state.todos.todos); 