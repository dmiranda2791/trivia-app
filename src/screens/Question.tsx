import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import QuestionActions from "../components/QuestionActions";
import Box from "../components/Box";
import Progress from "../components/Progress";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";

type ScreenParams = {
  Question: {
    category: string;
    question: string;
  };
};

type QuestionProps = StackScreenProps<ScreenParams, "Question">;

const Question = (props: QuestionProps) => {
  const { category, question } = props.route.params;
  return (
    <ScreenContainer>
      <Title text={category} />
      <Progress progress={0.5} />
      <Box text={question} />
      <QuestionActions />
    </ScreenContainer>
  );
};

export default Question;
