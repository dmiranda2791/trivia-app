import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../StyleGuide";

interface ButtonSkipProps {
  onPress: () => void;
  style?: ViewStyle;
}

const ButtonSkip = (props: ButtonSkipProps) => {
  const { onPress, style } = props;
  return (
    <RectButton style={style} onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="step-forward" size={24} color="black" />
      </View>
    </RectButton>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.neutral,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonSkip;
