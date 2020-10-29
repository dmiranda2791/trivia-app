import { configureStore } from "@reduxjs/toolkit";
/* import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; */
import rootReducer from "./reducers";
import { TriviaState } from "./reducers";

export interface RootState {
  trivia: TriviaState;
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
