import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: 'Ryan',
    lastName: 'Gosling',
    userOptin: false,
    userLoggedIn: true,
  },
  reducers: {
    toggleShowContent: state => {
      state.userOptin = !state.userOptin
    }
  }
})

export const { toggleShowContent } = profileSlice.actions;

export default profileSlice.reducer;