import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Buttons/Button";
import { ScreenParams } from "../components/Navigator";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import StyleGuide from "../StyleGuide";

type ResultsProps = StackScreenProps<ScreenParams>;
const questions = [
  {
    id: "fkdjaskl;f",
    question: "Unturned originally started as a Roblox game.",
    correct: true,
  },
  {
    id: "fdasfdsa",
    question: "Unturned originally started as a Roblox game",
    correct: true,
  },
  {
    id: "fdsafdas;lkfdjs",
    question:
      "In the game “Melty Blood Actress Again Current Code”, you can enter Blood Heat mode in Half Moon style.",
  },
];
const Results = (props: ResultsProps) => {
  const onPress = () => {
    props.navigation.navigate("Welcome");
  };
  return (
    <ScreenContainer>
      <Title text="You scored" />
      <Title text="3/10" />
      <View style={styles.answers}>
        {questions.map((question) => (
          <Text key={question.id} style={styles.listItem}>
            + {question.question}
          </Text>
        ))}
      </View>
      <Button onPress={onPress} text="Play again" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  listItem: {
    ...StyleGuide.text.sm,
    color: StyleGuide.colors.primary,
    textAlign: "justify",
  },
  answers: { alignItems: "flex-start" },
});

export default Results;
