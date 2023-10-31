import { createSlice } from '@reduxjs/toolkit';

type Todo = {
    id: number
    text: string
    completed: boolean
}

type Todos = Todo[];

export const counterSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [] as Todos,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
    }
})