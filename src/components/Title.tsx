import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import StyleGuide from "../StyleGuide";

const { height } = Dimensions.get("window");
const HEIGHT = height * 0.2;
interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
  text: {
    ...StyleGuide.text.lg,
    color: StyleGuide.colors.white,
    textAlign: "center",
    height: HEIGHT,
  },
});
export default Title;
