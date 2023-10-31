import { createSelector } from "@reduxjs/toolkit";
import store from "../store";

export const selectTodos = createSelector(store.getState, state => state.todos.todos);
export const selectSearch = createSelector(store.getState, state => state.todos.search);
export const filteredTodos = createSelector(selectTodos, selectSearch, (todos, searchText) => {
    if(searchText === '') return todos;
    return todos.filter((todo) => {
        const lowercaseText = todo.text.toLowerCase();
        return lowercaseText.includes(searchText.toLowerCase());
    });
})