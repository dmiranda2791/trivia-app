import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import StyleGuide from "../StyleGuide";

interface TitleProps {
  text?: string;
  style?: TextStyle;
}

const Title = ({ text, style }: TitleProps) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    ...StyleGuide.text.lg,
    color: StyleGuide.colors.white,
    textAlign: "center",
  },
});
export default Title;
