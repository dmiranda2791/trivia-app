import { Question } from "../entities";
import {
  BEGIN_GAME,
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
    visible: Question | undefined;
  };
  game: {
    totalQuestions: number;
    progress: number;
    correctAnswersCount: number;
    answers: Question[];
  };
}

const initialState: TriviaState = {
  questions: {
    loading: false,
    unanswered: [],
    skipped: [],
    answered: [],
    error: null,
    visible: undefined,
  },
  game: {
    totalQuestions: 0,
    progress: 0,
    correctAnswersCount: 0,
    answers: [],
  },
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
        game: {
          ...state.game,
          totalQuestions: action.payload.length,
        },
      };
    }
    case BEGIN_GAME: {
      const [visible, ...unanswered] = state.questions.unanswered;
      return {
        ...state,
        questions: {
          ...state.questions,
          visible,
          unanswered,
        },
        game: {
          ...state.game,
          progress: 1 / state.game.totalQuestions,
        },
      };
    }
    default:
      return state;
  }
};

export default triviaReducer;
