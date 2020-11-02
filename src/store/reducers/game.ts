import { Question } from "../entities";
import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../actions";

export interface QuestionAnswered {
  question: Question;
  answerIsCorrect: boolean;
}
export interface GameState {
  answeredQuestionsCount: number;
  answers: QuestionAnswered[];
  correctAnswersCount: number;
  error: string | null;
  loading: boolean;
  progress: number;
  skipped: Question[];
  totalQuestions: number;
  unanswered: Question[];
  visibleQuestion: Question | null;
}

const initialState: GameState = {
  answeredQuestionsCount: 0,
  answers: [],
  correctAnswersCount: 0,
  error: null,
  loading: false,
  progress: 0,
  skipped: [],
  totalQuestions: 0,
  unanswered: [],
  visibleQuestion: null,
};

const selectNextQuestion = (state: GameState) => {
  const nextUnasweredQuestion = state.unanswered.shift();
  if (nextUnasweredQuestion) {
    state.visibleQuestion = nextUnasweredQuestion;
  } else if (state.skipped.length > 0) {
    const nextSkippedQuestion = state.skipped.shift();
    if (nextSkippedQuestion) {
      state.visibleQuestion = nextSkippedQuestion;
    }
  }
};

const triviaSlice = createSlice({
  name: "simplifiedTriviaReducer",
  initialState,
  reducers: {
    beginGame(state) {
      const [visibleQuestion, ...unanswered] = state.unanswered;
      state.visibleQuestion = visibleQuestion;
      state.unanswered = unanswered;
      state.progress = 0;
      state.answeredQuestionsCount = 0;
    },
    answerQuestion(state, action) {
      const { answer } = action.payload;

      const isVisibleQuestionAnswerSaved = state.answers.find(
        (question) => question.question.id === state.visibleQuestion?.id
      );

      if (isVisibleQuestionAnswerSaved) {
        return;
      }

      const answerIsCorrect = state.visibleQuestion?.correct_answer === answer;

      if (answerIsCorrect) {
        state.correctAnswersCount += 1;
      }

      if (state.visibleQuestion) {
        state.answers.push({
          question: state.visibleQuestion,
          answerIsCorrect,
        });

        state.answeredQuestionsCount += 1;
        state.progress = state.answeredQuestionsCount / state.totalQuestions;
      }

      selectNextQuestion(state);
    },
    skipQuestion(state) {
      if (state.visibleQuestion) {
        state.skipped.push(state.visibleQuestion);
        selectNextQuestion(state);
      }
    },
    playAgain(state) {
      state.totalQuestions = 0;
      state.progress = 0;
      state.correctAnswersCount = 0;
      state.answers = [];
      state.unanswered = [];
      state.visibleQuestion = null;
    },
  },
  extraReducers: {
    [getQuestions.pending.type]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [getQuestions.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.unanswered = action.payload;
      state.totalQuestions = action.payload.length;
    },
    [getQuestions.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  beginGame,
  answerQuestion,
  skipQuestion,
  playAgain,
} = triviaSlice.actions;

export default triviaSlice.reducer;
