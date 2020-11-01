import { DataService } from "../../services";
import { Dispatch } from "redux";
import {
  getQuestionsFailed,
  getQuestionsStarted,
  getQuestionsSucceded,
} from "../reducers/game";

export const getQuestions = () => async (dispatch: Dispatch) => {
  dispatch(getQuestionsStarted());

  try {
    const questions = await DataService.getQuestions(10);
    dispatch(getQuestionsSucceded(questions));
  } catch (err) {
    dispatch(getQuestionsFailed(err.toString()));
  }
};
