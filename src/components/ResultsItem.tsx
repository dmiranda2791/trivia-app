import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { QuestionAnswered } from "../store/reducers/game";
import StyleGuide from "../StyleGuide";

interface ResultsItemProps {
  question: QuestionAnswered;
  style?: ViewStyle;
}

const ResultsItem = (props: ResultsItemProps) => {
  const { question, style } = props;
  const backgroundColor = question.answerIsCorrect
    ? StyleGuide.colors.positive
    : StyleGuide.colors.negative;

  return (
    <View style={[styles.container, style, { backgroundColor }]}>
      <Text style={styles.text}>{question.question.question}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 23,
    borderWidth: 1,
    borderColor: StyleGuide.colors.border,
    borderStyle: "solid",
    padding: 8,
    flex: 1,
  },
  text: {
    ...StyleGuide.text.sm,
    color: StyleGuide.colors.white,
  },
});

export default ResultsItem;
