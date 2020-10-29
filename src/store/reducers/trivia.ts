import { Question } from "../entities";
import { createSlice } from "@reduxjs/toolkit";

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

const triviaSlice = createSlice({
  name: "simplifiedTriviaReducer",
  initialState,
  reducers: {
    getQuestionsStarted(state) {
      state.questions.error = null;
      state.questions.loading = true;
    },
    getQuestionsFailed(state, action) {
      state.questions.loading = false;
      state.questions.error = action.payload;
    },
    getQuestionsSucceded(state, action) {
      state.questions.unanswered = action.payload;
      state.game.totalQuestions = action.payload.length;
    },
    beginGame(state) {
      const [visible, ...unanswered] = state.questions.unanswered;
      state.questions.visible = visible;
      state.questions.unanswered = unanswered;
      state.game.progress = 1 / state.game.totalQuestions;
    },
  },
});

export const {
  getQuestionsStarted,
  getQuestionsFailed,
  getQuestionsSucceded,
  beginGame,
} = triviaSlice.actions;

export default triviaSlice.reducer;
