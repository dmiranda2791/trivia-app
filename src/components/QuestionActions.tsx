import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { answerQuestion, skipQuestion } from "../store/reducers/trivia";
import ButtonNegative from "./Buttons/ButtonNegative";
import ButtonPositive from "./Buttons/ButtonPositive";
import ButtonSkip from "./Buttons/ButtonSkip";

const QuestionActions = () => {
  const dispatch = useDispatch();

  const onAnswerButtonPress = React.useCallback(
    (answer) => {
      dispatch(answerQuestion({ answer }));
    },
    [dispatch]
  );

  const onSkipButtonPress = React.useCallback(() => {
    dispatch(skipQuestion());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.answers}>
        <ButtonPositive onPress={() => onAnswerButtonPress("True")} />
        <ButtonNegative onPress={() => onAnswerButtonPress("False")} />
      </View>
      <ButtonSkip style={styles.skip} onPress={onSkipButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignSelf: "stretch" },
  answers: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  skip: { alignSelf: "center" },
});
export default QuestionActions;
