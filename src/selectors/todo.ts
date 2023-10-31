import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectTodos = createSelector(store.getState, state => state.todos.todos);
// export const selectSearch = createSelector(store.getState(), state => state.search);
export const filteredTodos = createSelector(selectTodos, (todos) => {

})