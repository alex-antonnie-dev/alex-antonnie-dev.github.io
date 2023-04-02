import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (page) => {
    const response = await axios.get(`http://localhost/practice/dg_workshop/API/CONTENTLISTINGPAGE-PAGE${page}.json`);
    console.log(response.data.page['content-items'].content)
    return response.data.page['content-items'].content;
  }
);