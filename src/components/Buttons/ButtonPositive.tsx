import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../StyleGuide";

interface ButtonPositiveProps {
  onPress: () => void;
}

const ButtonPositive = (props: ButtonPositiveProps) => {
  const { onPress } = props;
  return (
    <RectButton onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="check" size={24} color="black" />
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.positive,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonPositive;
