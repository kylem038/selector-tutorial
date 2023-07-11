import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      firstName: 'Ryan',
      lastName: 'Gosling',
      showContent: false,
    },
    reducers: {
      toggleShowContent: state => {
        state.showContent = !state.showContent
      }
    }
  })
  
  export const { toggleShowContent } = profileSlice.actions;
  
  export default profileSlice.reducer;