import { combineReducers } from "redux";
import triviaReducer from "./trivia";
export { TriviaState } from "./trivia";

const rootReducer = combineReducers({
  trivia: triviaReducer,
});

export default rootReducer;
