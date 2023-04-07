import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (page) => {
    const response = await axios.get(`https://karthikacreations.in/assets/CONTENTLISTINGPAGE-PAGE${page}.json`);
    return response.data.page;
  }
);