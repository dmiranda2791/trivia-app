import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import Button from "../components/Buttons/Button";
import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import StyleGuide from "../StyleGuide";
import { beginGame } from "../store/reducers/game";
import { getQuestions } from "../store/actions";
import { ScreenParams } from "../components/Navigator";
import { RootState } from "../store";

type WelcomeProps = StackScreenProps<ScreenParams>;

const Welcome = (props: WelcomeProps) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const selectQuestionsLoading = (state: RootState) => state.game.loading;
  const questionsLoading = useSelector(selectQuestionsLoading);

  const onPress = React.useCallback(() => {
    dispatch(beginGame());
    navigation.navigate("Question");
  }, [navigation, dispatch]);

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
      {questionsLoading ? (
        <ActivityIndicator size="large" color={StyleGuide.colors.progress} />
      ) : (
        <Button text="Begin" onPress={onPress} />
      )}
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
    ...StyleGuide.text.shadow,
    color: StyleGuide.colors.white,
    padding: 8,
  },
});
export default Welcome;
