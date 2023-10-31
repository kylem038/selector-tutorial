import { createSlice } from '@reduxjs/toolkit';

type Todo = {
    id: number
    text: string
    completed: boolean
}

type Todos = Todo[];

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            { id: 1, text: "Grocery shopping", completed: false },
            { id: 2, text: "Pack for trip", completed: false },
        ] as Todos,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
    }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
