import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from '../reducers/imagesReducer';
import SearchReducer from '../reducers/SearchReducer';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    search: SearchReducer
  },
});

export default store;