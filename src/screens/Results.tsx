import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Buttons/Button";
import { ScreenParams } from "../components/Navigator";
import ResultsItem from "../components/ResultsItem";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import { RootState } from "../store";
import { playAgain } from "../store/reducers/game";

type ResultsProps = StackScreenProps<ScreenParams>;

const Results = (props: ResultsProps) => {
  const dispatch = useDispatch();
  const selectAnswers = (state: RootState) => state.game.answers;
  const selectTotalQuestions = (state: RootState) => state.game.totalQuestions;
  const selectCorrectAnswersCount = (state: RootState) =>
    state.game.correctAnswersCount;

  const answers = useSelector(selectAnswers);
  const totalQuestions = useSelector(selectTotalQuestions);
  const correctAnswersCount = useSelector(selectCorrectAnswersCount);

  const onPlayAgainPress = () => {
    dispatch(playAgain());
    props.navigation.navigate("Welcome");
  };

  return (
    <ScreenContainer>
      <Title text="You scored" />
      <Title text={`${correctAnswersCount}/${totalQuestions}`} />
      <ScrollView style={styles.separator} showsVerticalScrollIndicator={false}>
        {answers.map((question) => (
          <ResultsItem
            style={styles.separator}
            key={question.question.id}
            question={question}
          />
        ))}
        <Button
          style={styles.separator}
          onPress={onPlayAgainPress}
          text="Play again"
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
  },
});

export default Results;
