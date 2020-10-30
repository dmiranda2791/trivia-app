import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import StyleGuide from "../StyleGuide";

interface BoxProps {
  text?: string;
  style?: ViewStyle;
}

const Box = (props: BoxProps) => {
  const { text, style } = props;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.white,
    borderRadius: 23,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    ...StyleGuide.text.md,
    color: StyleGuide.colors.primary,
    textAlign: "center",
  },
});
export default Box;
