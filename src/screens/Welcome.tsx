import React from "react";
import { StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import ScreenContainer from "../components/ScreenContainer";
import StyleGuide from "../StyleGuide";

const Welcome = () => {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Welcome to the trivia challenge!</Text>
      <Text style={styles.body}>
        You will be presented with 10 true or false questions.
      </Text>
      <Text style={styles.body}>Can you score 100%?</Text>
      <Button text="Begin" />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
  },
  title: {
    ...StyleGuide.text.title,
  },
  body: {
    ...StyleGuide.text.body,
  },
});
export default Welcome;
