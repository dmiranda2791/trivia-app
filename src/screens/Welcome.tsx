import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import Button from "../components/Buttons/Button";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import StyleGuide from "../StyleGuide";

import { getQuestions } from "../store/actions";

type ScreenParams = {
  Question: {
    category: string;
    question: string;
  };
};

type WelcomeProps = StackScreenProps<ScreenParams>;

const Welcome = (props: WelcomeProps) => {
  const { navigation } = props;

  const onPress = React.useCallback(() => {
    navigation.navigate("Question", {
      category: "Entertainment: Video Games",
      question: "Unturned originally started as a Roblox game.",
    });
  }, [navigation]);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getQuestions());
    }, [dispatch])
  );

  return (
    <ScreenContainer>
      <Title text="Welcome to the trivia challenge!" />
      <Text style={styles.body}>
        You will be presented with 10 true or false questions.
      </Text>
      <Text style={styles.body}>Can you score 100%?</Text>
      <Button text="Begin" onPress={onPress} />
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
  body: {
    ...StyleGuide.text.md,
    color: StyleGuide.colors.white,
  },
});
export default Welcome;
