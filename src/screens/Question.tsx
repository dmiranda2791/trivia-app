import React, { useEffect } from "react";
import QuestionActions from "../components/QuestionActions";
import Box from "../components/Box";
import Progress from "../components/Progress";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { ScreenParams } from "../components/Navigator";
import { Dimensions, StyleSheet } from "react-native";

type QuestionProps = StackScreenProps<ScreenParams>;

const Question = (props: QuestionProps) => {
  const { navigation } = props;
  const selectQuestion = (state: RootState) => state.trivia.questions.visible;
  const selectGameProgress = (state: RootState) => state.trivia.game.progress;
  const selectTotalQuestions = (state: RootState) =>
    state.trivia.game.totalQuestions;
  const selectAnsweredQuestionsCount = (state: RootState) =>
    state.trivia.game.answeredQuestionsCount;

  const question = useSelector(selectQuestion);
  const gameProgress = useSelector(selectGameProgress);
  const totalQuestions = useSelector(selectTotalQuestions);
  const answeredQuestionsCount = useSelector(selectAnsweredQuestionsCount);

  useEffect(() => {
    if (answeredQuestionsCount === totalQuestions) {
      navigation.navigate("Results");
    }
  }, [answeredQuestionsCount, navigation, totalQuestions]);

  return (
    <ScreenContainer>
      <Title style={styles.title} text={question?.category} />
      <Progress
        progress={gameProgress}
        total={totalQuestions}
        current={answeredQuestionsCount}
      />
      <Box style={styles.box} text={question?.question} />
      <QuestionActions />
    </ScreenContainer>
  );
};

const { height } = Dimensions.get("window");
const MIN_BOX_HEIGHT = height * 0.35;
const MIN_TITLE_HEIGHT = height * 0.2;
const styles = StyleSheet.create({
  box: {
    minHeight: MIN_BOX_HEIGHT,
  },
  title: {
    minHeight: MIN_TITLE_HEIGHT,
  },
});

export default Question;
