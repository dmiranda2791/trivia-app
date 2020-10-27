import { Question } from "../entities";
import { GET_QUESTIONS } from "../actions/trivia/types";
import { TriviaActionTypes } from "../actions/trivia/types";

export interface TriviaState {
  questions: Question[];
  visibleQuestion: string | null;
  skippedQuestions: string[];
  answers: string[];
}

const initialState: TriviaState = {
  questions: [],
  visibleQuestion: "1",
  skippedQuestions: [],
  answers: [],
};

const triviaReducer = (state = initialState, action: TriviaActionTypes) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
};

export default triviaReducer;
