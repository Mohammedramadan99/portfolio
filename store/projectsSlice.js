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

export const createProjectAction = createAsyncThunk(
  "projects/create",
  async (projectData, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${origin}/api/projects`,
        projectData,
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
export const getProjectsAction = createAsyncThunk(
  "projects/all",
  async (projectData, { rejectWithValue, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.get(
        `${origin}/api/projects`,
        projectData,
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
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects:[]
  },
  reducers: {
    reset: (state) => { },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(createProjectAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(createProjectAction.fulfilled, (state, action) => {
      state.loading = false;
      state.created = true;
      state.appErr = null;
      state.serverErr = null;
      state.loggedOut = false;
    });
    builder.addCase(createProjectAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload;
      state.serverErr = action?.error?.message;
      state.registered = false;
    });
    // get projects
    builder.addCase(getProjectsAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(getProjectsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload.projects;
      state.appErr = null;
      state.serverErr = null;
      state.loggedOut = false;
    });
    builder.addCase(getProjectsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload;
      state.serverErr = action?.error?.message;
      state.registered = false;
    });
  },
});

export const { reset, setMode } = projectsSlice.actions;

export default projectsSlice.reducer;
