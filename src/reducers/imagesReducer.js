import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from '../actions/imagesActions';

const initialState = {
  images: [],
  page: 1,
  status: 'idle',
  error: null,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        console.log('action', state.page)
        state.status = 'succeeded';
        state.images = [...state.images, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;