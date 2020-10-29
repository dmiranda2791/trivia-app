import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../StyleGuide";

interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  const { text } = props;
  return (
    <RectButton style={styles.container} onPress={() => console.log("Hola!")}>
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
