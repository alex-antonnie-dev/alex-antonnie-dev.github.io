import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from '../actions/imagesActions';

//to save the loaded images in redux

const initialState = {
  images: [],
  page: 0,
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
        state.status = 'succeeded';
        state.images = [...state.images, ...action.payload['content-items'].content];
        state.page   = action.payload['page-num-requested'];
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;