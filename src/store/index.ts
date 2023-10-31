import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import profileReducer from './profileSlice';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    todos: todoReducer,
  }
});