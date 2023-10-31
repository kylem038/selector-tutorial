import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Todo = {
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
            { id: 2, text: "Pack for trip", completed: true },
        ] as Todos,
    },
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [...state.todos, action.payload];
        },
        completeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
            }) as Todos;
        }
    }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
