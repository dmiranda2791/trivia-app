import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import QuestionActions from "../components/QuestionActions";
import Box from "../components/Box";
import Progress from "../components/Progress";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type ScreenParams = {
  Question: undefined;
};

type QuestionProps = StackScreenProps<ScreenParams, "Question">;

const Question = (props: QuestionProps) => {
  const selectQuestion = (state: RootState) => state.trivia.questions.visible;
  const selectGameProgress = (state: RootState) => state.trivia.game.progress;
  const question = useSelector(selectQuestion);
  const gameProgress = useSelector(selectGameProgress);

  return (
    <ScreenContainer>
      <Title text={question?.category} />
      <Progress progress={gameProgress} />
      <Box text={question?.question} />
      <QuestionActions />
    </ScreenContainer>
  );
};

export default Question;
