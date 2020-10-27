import { Question } from "../../entities";
import { GetQuestionsAction, GET_QUESTIONS } from "./types";

export const getQuestions = (payload: Question[]): GetQuestionsAction => ({
  type: GET_QUESTIONS,
  payload,
});
