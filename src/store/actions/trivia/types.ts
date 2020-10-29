import { Question } from "../../entities";

export const GET_QUESTIONS_STARTED = "GET_QUESTIONS_STARTED";
export const GET_QUESTIONS_SUCCEDED = "GET_QUESTIONS_SUCCEDED";
export const GET_QUESTIONS_FAILED = "GET_QUESTIONS_FAILED";

export const BEGIN_GAME = "BEGIN_GAME";

export interface GetQuestionsStarted {
  type: typeof GET_QUESTIONS_STARTED;
  payload: undefined;
}
export interface GetQuestionsSucceded {
  type: typeof GET_QUESTIONS_SUCCEDED;
  payload: Question[];
}
export interface GetQuestionsFailed {
  type: typeof GET_QUESTIONS_FAILED;
  payload: string;
}

export interface BeginGameAction {
  type: typeof BEGIN_GAME;
  payload: undefined;
}

export type TriviaActionTypes =
  | BeginGameAction
  | GetQuestionsStarted
  | GetQuestionsSucceded
  | GetQuestionsFailed;
