import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../StyleGuide";

interface ButtonRoundedProps {
  onPress: () => void;
  variant: "positive" | "negative" | "neutral";
  iconName: string;
  style?: ViewStyle;
}

interface Variants {
  positive: ViewStyle;
  negative: ViewStyle;
  neutral: ViewStyle;
}
const VARIANTS: Variants = {
  positive: {
    backgroundColor: StyleGuide.colors.positive,
  },
  negative: {
    backgroundColor: StyleGuide.colors.negative,
  },
  neutral: {
    backgroundColor: StyleGuide.colors.neutral,
  },
};

const ButtonRounded = (props: ButtonRoundedProps) => {
  const { onPress, variant, iconName, style } = props;

  return (
    <RectButton onPress={onPress}>
      <View style={[styles.container, style, VARIANTS[variant]]}>
        <FontAwesome5 name={iconName} size={24} color="black" />
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonRounded;
