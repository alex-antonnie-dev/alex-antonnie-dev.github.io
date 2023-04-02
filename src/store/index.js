import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../reducers/imagesReducer';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;