import { Question } from "../../entities";

export const GET_QUESTIONS = "GET_QUESTIONS";

export interface GetQuestionsAction {
  type: typeof GET_QUESTIONS;
  payload: Question[];
}

export type TriviaActionTypes = GetQuestionsAction;
