import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';

export type Todo = {
    id: number
    text: string
    completed: boolean
}

type Todos = Todo[];

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        search: '',
        todos: [
            { id: 1, text: "Grocery shopping", completed: false },
            { id: 2, text: "Pack for trip", completed: false },
        ] as Todos,
    },
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [...state.todos, action.payload];
        },
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        toggleTodoComplete: (state, action: PayloadAction<number>) => {
            // handling array iteration here is a bit weird
            // state.todos is a proxy object instead of the array itself
            // so we need to use current from the toolkit to get the actual array
            const currentState = current(state);
            state.todos = currentState.todos.map(todo => {
                if(todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            }) as Todos;
        }
    }
});

export const { addTodo, changeSearch, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
