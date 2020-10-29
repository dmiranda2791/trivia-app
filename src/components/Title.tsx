import React from "react";
import { StyleSheet, Text } from "react-native";
import StyleGuide from "../StyleGuide";

interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
  text: {
    ...StyleGuide.text.lg,
    color: StyleGuide.colors.white,
    textAlign: "center",
  },
});
export default Title;
