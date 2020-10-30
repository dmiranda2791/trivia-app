import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import StyleGuide from "../../StyleGuide";
import ButtonRounded from "./ButtonRounded";

interface ButtonSkipProps {
  onPress: () => void;
  style?: ViewStyle;
}

const ButtonSkip = (props: ButtonSkipProps) => {
  const { onPress, style } = props;
  return (
    <View style={style}>
      <ButtonRounded
        variant="neutral"
        iconName="step-forward"
        onPress={onPress}
        iconColor={StyleGuide.colors.primary}
      />
      <Text style={styles.text}>Skip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...StyleGuide.text.md,
    color: StyleGuide.colors.white,
  },
});
export default ButtonSkip;
