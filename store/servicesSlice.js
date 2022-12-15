import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const hostname =
  typeof window !== "undefined" && window.location.hostname
    ? window.location.hostname
    : "";

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

export const getServicesAction = createAsyncThunk(
  "services/all",
  async (_, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        `${origin}/api/services`,
        config
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//slices
const servicesSlice = createSlice({
  name: "projects",
  initialState: {
    allServices:[],
  },
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    //get Services
    builder.addCase(getServicesAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(getServicesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.allServices = action.payload.services;
      state.appErr = null;
      state.serverErr = null;
      state.loggedOut = false;
    });
    builder.addCase(getServicesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload;
      state.serverErr = action?.error?.message;
      state.registered = false;
    });
  },
});

export const { reset } = servicesSlice.actions;

export default servicesSlice.reducer;
