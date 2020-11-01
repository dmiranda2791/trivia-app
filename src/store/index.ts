import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
export { RootState } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
