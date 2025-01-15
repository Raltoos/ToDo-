import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }) => {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: `${latitude},${longitude}`, 
      },
    });
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
