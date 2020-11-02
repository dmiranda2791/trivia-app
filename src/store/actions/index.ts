import { DataService } from "../../services";
import { createAsyncThunk } from "@reduxjs/toolkit";

const QUESTIONS_QUANTITY = 10;

export const getQuestions = createAsyncThunk("GET_QUESTIONS", async () => {
  const questions = await DataService.getQuestions(QUESTIONS_QUANTITY);
  return questions;
});
