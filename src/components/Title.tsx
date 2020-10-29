import React from "react";
import { Text } from "react-native";
import StyleGuide from "../StyleGuide";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => (
  <Text style={StyleGuide.text.title}>{text}</Text>
);

export default Title;
