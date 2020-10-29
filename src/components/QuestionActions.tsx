import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonNegative from "./Buttons/ButtonNegative";
import ButtonPositive from "./Buttons/ButtonPositive";
import ButtonSkip from "./Buttons/ButtonSkip";

const QuestionActions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.answers}>
        <ButtonPositive onPress={() => console.log("Hola!")} />
        <ButtonNegative onPress={() => console.log("Hola!")} />
      </View>
      <ButtonSkip style={styles.skip} onPress={() => console.log("Hola!")} />
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
