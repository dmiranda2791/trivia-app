import { answerQuestion, GameState } from "../game";

import reducer from "../game";

describe("On question answered", () => {
  describe("when answer is correct", () => {
    it("should sum one to correct answers count", () => {
      const question = {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
        correct_answer: "True",
        incorrect_answers: ["False"],
      };

      const initialState: GameState = {
        loading: false,
        unanswered: [],
        skipped: [],
        answered: [],
        error: null,
        visibleQuestion: question,
        totalQuestions: 0,
        answeredQuestionsCount: 0,
        progress: 0,
        correctAnswersCount: 0,
        answers: [],
      };

      const action = answerQuestion({
        answer: question.correct_answer,
      });

      const state = reducer(initialState, action);

      expect(state.correctAnswersCount).toBe(1);
    });
  });
});
