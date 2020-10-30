import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import StyleGuide from "../StyleGuide";

interface TitleProps {
  text?: string;
  style?: ViewStyle;
}

const Title = ({ text, style }: TitleProps) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.text]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    ...StyleGuide.text.lg,
    color: StyleGuide.colors.white,
    textAlign: "center",
  },
});
export default Title;
