import { Question } from "../entities";
import { createSlice } from "@reduxjs/toolkit";

export interface QuestionAnswered {
  question: Question;
  answerIsCorrect: boolean;
}
export interface TriviaState {
  questions: {
    loading: boolean;
    unanswered: Question[];
    skipped: Question[];
    answered: Question[];
    error: string | null;
    visible: Question | null;
  };
  game: {
    totalQuestions: number;
    answeredQuestionsCount: number;
    progress: number;
    correctAnswersCount: number;
    answers: QuestionAnswered[];
  };
}

const initialState: TriviaState = {
  questions: {
    loading: false,
    unanswered: [],
    skipped: [],
    answered: [],
    error: null,
    visible: null,
  },
  game: {
    totalQuestions: 0,
    answeredQuestionsCount: 0,
    progress: 0,
    correctAnswersCount: 0,
    answers: [],
  },
};

const selectNextQuestion = (state: TriviaState) => {
  const nextUnasweredQuestion = state.questions.unanswered.shift();
  if (nextUnasweredQuestion) {
    state.questions.visible = nextUnasweredQuestion;
  } else if (state.questions.skipped.length > 0) {
    const nextSkippedQuestion = state.questions.skipped.shift();
    if (nextSkippedQuestion) {
      state.questions.visible = nextSkippedQuestion;
    }
  }
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
      state.game.progress = 0;
      state.game.answeredQuestionsCount = 0;
    },
    answerQuestion(state, action) {
      const { answer } = action.payload;

      const answerIsCorrect =
        state.questions.visible?.correct_answer === answer;

      if (state.questions.visible) {
        state.game.answers.push({
          question: state.questions.visible,
          answerIsCorrect,
        });

        state.game.answeredQuestionsCount += 1;
        state.game.progress =
          state.game.answeredQuestionsCount / state.game.totalQuestions;
      }

      if (answerIsCorrect) {
        state.game.correctAnswersCount += 1;
      }

      selectNextQuestion(state);
    },
    skipQuestion(state) {
      if (state.questions.visible) {
        state.questions.skipped.push(state.questions.visible);
        selectNextQuestion(state);
      }
    },
    playAgain(state) {
      state.questions.answered = [];
      state.game.totalQuestions = 0;
      state.game.progress = 0;
      state.game.correctAnswersCount = 0;
      state.game.answers = [];
    },
  },
});

export const {
  getQuestionsStarted,
  getQuestionsFailed,
  getQuestionsSucceded,
  beginGame,
  answerQuestion,
  skipQuestion,
  playAgain,
} = triviaSlice.actions;

export default triviaSlice.reducer;
