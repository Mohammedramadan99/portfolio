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

export const ordersAction = createAsyncThunk(
  "order/all",
  async (_, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        `${origin}/api/orders`,
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
export const createOrderAction = createAsyncThunk(
  "order/create",
  async (orderData, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${origin}/api/orders`,orderData,
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
  name: "orders",
  initialState: {
    allOrders: [],
    createdOrder:false
  },
  reducers: {
    reset: (state) => {
      state.createdOrder = false;
    },
  },
  extraReducers: (builder) => {
    //get Services
    builder.addCase(ordersAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(ordersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.allOrders = action.payload.orders;
      state.appErr = null;
      state.serverErr = null;
      state.loggedOut = false;
    });
    builder.addCase(ordersAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload;
      state.serverErr = action?.error?.message;
      state.registered = false;
    });
    // create order
    builder.addCase(createOrderAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(createOrderAction.fulfilled, (state, action) => {
      state.loading = false;
      state.createdOrder = true;
      state.appErr = null;
      state.serverErr = null;
      state.loggedOut = false;
    });
    builder.addCase(createOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload;
      state.serverErr = action?.error?.message;
      state.registered = false;
    });
  },
});

export const { reset } = servicesSlice.actions;

export default servicesSlice.reducer;
