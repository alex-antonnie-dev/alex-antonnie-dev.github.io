import { createSlice } from '@reduxjs/toolkit';

//to store the entered search text in redux

const searchSlice = createSlice({
  name: 'search',
  initialState: { query: '' },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
