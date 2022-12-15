import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import users from "./usersSlice";
import projectReducer from "./projectsSlice";
import servicesReducer from "./servicesSlice";
import ordersReducer from "./ordersSlice";

const combinedReducer = combineReducers({
  projects: projectReducer,
  services: servicesReducer,
  orders: ordersReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore);