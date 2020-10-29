import { Question } from "../entities";
import {
  GET_QUESTIONS_FAILED,
  GET_QUESTIONS_STARTED,
  GET_QUESTIONS_SUCCEDED,
} from "../actions/trivia/types";
import { TriviaActionTypes } from "../actions/trivia/types";

export interface TriviaState {
  questions: {
    loading: boolean;
    unanswered: Question[];
    skipped: Question[];
    answered: Question[];
    error: string | null;
  };
  visibleQuestion: string | null;
}

const initialState: TriviaState = {
  questions: {
    loading: false,
    unanswered: [],
    skipped: [],
    answered: [],
    error: null,
  },
  visibleQuestion: "1",
};

const triviaReducer = (state = initialState, action: TriviaActionTypes) => {
  switch (action.type) {
    case GET_QUESTIONS_STARTED:
      return {
        ...state,
        questions: {
          ...state.questions,
          error: null,
          loading: true,
        },
      };
    case GET_QUESTIONS_FAILED: {
      return {
        ...state,
        questions: {
          ...state.questions,
          loading: false,
          error: action.payload,
        },
      };
    }
    case GET_QUESTIONS_SUCCEDED: {
      return {
        ...state,
        questions: {
          ...state.questions,
          unanswered: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default triviaReducer;
