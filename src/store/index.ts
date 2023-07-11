import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
  }
});