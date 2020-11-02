import {
  answerQuestion,
  beginGame,
  GameState,
  playAgain,
  QuestionAnswered,
  skipQuestion,
} from "../game";

jest.mock("react-native-get-random-values", () => ({
  getRandomBase64: jest.fn(),
}));

import reducer from "../game";
import { Question } from "../../entities";
const questions = [
  {
    category: "Vehicles",
    type: "boolean",
    difficulty: "hard",
    question:
      "In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question:
      "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "History",
    type: "boolean",
    difficulty: "hard",
    question: "The Kingdom of Prussia briefly held land in Estonia.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Comics",
    type: "boolean",
    difficulty: "hard",
    question:
      "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "History",
    type: "boolean",
    difficulty: "hard",
    question: "The USS Missouri (BB-63) last served in the Korean War.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Board Games",
    type: "boolean",
    difficulty: "hard",
    question:
      "The board game Go has more possible legal positions than the number of atoms in the visible universe.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science & Nature",
    type: "boolean",
    difficulty: "hard",
    question:
      "The value of one Calorie is different than the value of one calorie.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "hard",
    question:
      "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "History",
    type: "boolean",
    difficulty: "hard",
    question: "The man that shot Alexander Hamilton was named Aaron Burr.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

interface GameStateOverrides {
  answeredQuestionsCount?: number;
  answers?: QuestionAnswered[];
  correctAnswersCount?: number;
  error?: string | null;
  loading?: boolean;
  progress?: number;
  skipped?: Question[];
  totalQuestions?: number;
  unanswered?: Question[];
  visibleQuestion?: Question | null;
}

function getStateMock(overrides: GameStateOverrides = {}): GameState {
  const initialState: GameState = {
    loading: false,
    unanswered: [],
    skipped: [],
    error: null,
    visibleQuestion: null,
    totalQuestions: 0,
    answeredQuestionsCount: 0,
    progress: 0,
    correctAnswersCount: 0,
    answers: [],
  };

  return {
    ...initialState,
    ...overrides,
  };
}

describe("When game begins", () => {
  it("should move the first unanswered question to the visible question", () => {
    const initial = getStateMock({
      unanswered: questions,
    });

    const action = beginGame();
    const state = reducer(initial, action);
    expect(state.visibleQuestion).toBe(questions[0]);
    expect(state.unanswered.length).toBe(initial.unanswered.length - 1);
    expect(state.progress).toBe(0);
    expect(state.answeredQuestionsCount).toBe(0);
  });
});

describe("When a question is answered", () => {
  it("should save the answer", () => {
    const visibleQuestion = questions[0];
    const initialState = getStateMock({
      visibleQuestion,
    });

    const action = answerQuestion({
      answer: visibleQuestion.correct_answer,
    });

    const state = reducer(initialState, action);

    expect(state.answers.length).toBe(1);
    expect(state.answers[0].question).toBe(visibleQuestion);
    expect(state.answers[0].answerIsCorrect).toBeDefined();
  });
  describe("when the question has already been answered", () => {
    it("should not save a duplicate answer", () => {
      const visibleQuestion = questions[0];
      const unanswered = questions.slice(1);
      const initialState = getStateMock({
        unanswered,
        totalQuestions: 10,
        visibleQuestion,
        answeredQuestionsCount: 1,
        correctAnswersCount: 1,
        progress: 0.1,
        answers: [{ question: visibleQuestion, answerIsCorrect: true }],
      });

      const action = answerQuestion({ answer: visibleQuestion.correct_answer });

      const state = reducer(initialState, action);

      const questionAnswers = state.answers.filter(
        (answeredQuestion) => answeredQuestion.question === visibleQuestion
      );
      expect(questionAnswers.length).toBe(1);
    });
  });

  it("should increment the answered questions count", () => {
    const visibleQuestion = questions[0];
    const initialState = getStateMock({
      visibleQuestion,
    });

    const action = answerQuestion({
      answer: visibleQuestion.correct_answer,
    });

    const state = reducer(initialState, action);

    const expectedCount = initialState.answeredQuestionsCount + 1;
    expect(state.answeredQuestionsCount).toBe(expectedCount);
  });
  it("should increment the progress", () => {
    const visibleQuestion = questions[0];
    const initialState = getStateMock({
      visibleQuestion,
    });

    const action = answerQuestion({
      answer: visibleQuestion.correct_answer,
    });

    const state = reducer(initialState, action);

    const expectedProgress =
      initialState.answeredQuestionsCount + 1 / state.totalQuestions;

    expect(state.progress).toBe(expectedProgress);
  });

  describe("when answer is correct", () => {
    const visibleQuestion = questions[0];
    const initialState = getStateMock({
      visibleQuestion,
    });
    const action = answerQuestion({
      answer: visibleQuestion.correct_answer,
    });

    it("should sum one to correct answers count", () => {
      const state = reducer(initialState, action);

      expect(state.correctAnswersCount).toBe(1);
    });
    it("should register that answer is correct", () => {
      const state = reducer(initialState, action);

      expect(state.answers.length).toBe(1);
      expect(state.answers[0].question).toBe(visibleQuestion);
      expect(state.answers[0].answerIsCorrect).toBe(true);
    });
  });
  describe("when answer is incorrect", () => {
    const visibleQuestion = questions[0];
    const initialState = getStateMock({
      visibleQuestion,
    });
    const action = answerQuestion({
      answer: visibleQuestion.incorrect_answers[0],
    });

    it("should not sum one to correct answers count", () => {
      const state = reducer(initialState, action);

      expect(state.correctAnswersCount).toBe(
        initialState.answeredQuestionsCount
      );
    });
    it("should register that answer is incorrect", () => {
      const state = reducer(initialState, action);

      expect(state.answers.length).toBe(initialState.answers.length + 1);
      expect(state.answers[0].question).toBe(visibleQuestion);
      expect(state.answers[0].answerIsCorrect).toBe(false);
    });
  });
  describe("when answered question list is empty and skipped questions is not empty", () => {
    it("should make the first skipped question the visible question", () => {
      const visibleQuestion = questions[0];
      const skipped = questions.slice(1, 3);
      const initial = getStateMock({
        visibleQuestion,
        skipped,
      });

      const action = answerQuestion({ answer: visibleQuestion.correct_answer });

      const state = reducer(initial, action);

      expect(state.visibleQuestion).toBe(skipped[0]);
    });
  });
});

describe("when a question is skipped", () => {
  it("should save the question to the list of questions skipped", () => {
    const visibleQuestion = questions[0];
    const unanswered = questions.slice(1);
    const initialState = getStateMock({
      visibleQuestion,
      unanswered,
    });
    const action = skipQuestion();

    const state = reducer(initialState, action);

    expect(state.skipped.length).toBe(initialState.skipped.length + 1);
  });
});

describe("when the game is reset", () => {
  it("should reset all values to the initial state", () => {
    const initialState = getStateMock({
      totalQuestions: 10,
      progress: 1,
      unanswered: questions,
    });
    const emptyState = getStateMock();

    const action = playAgain();

    const state = reducer(initialState, action);

    expect(state).toEqual(emptyState);
  });
});
