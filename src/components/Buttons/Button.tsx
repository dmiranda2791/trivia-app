import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../StyleGuide";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, onPress } = props;
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.white,
    width: "100%",
    borderRadius: 22,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontFamily: StyleGuide.fonts.primary,
    fontSize: 33,
    color: StyleGuide.colors.primary,
    textAlign: "center",
  },
});
export default Button;
