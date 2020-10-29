import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import StyleGuide from "../StyleGuide";

interface BoxProps {
  text: string;
}

const { height } = Dimensions.get("window");
const MIN_HEIGHT = height * 0.35;

const Box = (props: BoxProps) => {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.white,
    borderRadius: 23,
    alignSelf: "stretch",
    minHeight: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...StyleGuide.text.md,
    color: StyleGuide.colors.primary,
    textAlign: "center",
  },
});
export default Box;
