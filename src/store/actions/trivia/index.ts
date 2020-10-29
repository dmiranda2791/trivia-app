import { Question } from "../../entities";
import { BeginGameAction, BEGIN_GAME } from "./types";
import { DataService } from "../../../services";
import { Dispatch } from "redux";

const getQuestionsStarted = () => ({
  type: "GET_QUESTIONS_STARTED",
});

const getQuestionsSuccess = (questions: Question[]) => ({
  type: "GET_QUESTIONS_SUCCEDED",
  payload: questions,
});

const getQuestionsFailed = (error: string) => ({
  type: "GET_QUESTIONS_FAILED",
  error,
});

export const getQuestions = () => async (dispatch: Dispatch) => {
  dispatch(getQuestionsStarted());

  try {
    const questions = await DataService.getQuestions(10);
    dispatch(getQuestionsSuccess(questions));
  } catch (err) {
    dispatch(getQuestionsFailed(err.toString()));
  }
};

export const beginGame = (payload: undefined): BeginGameAction => ({
  type: BEGIN_GAME,
  payload,
});
