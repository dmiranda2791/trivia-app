import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import StyleGuide from "../../StyleGuide";

interface ButtonNegativeProps {
  onPress: () => void;
}

const ButtonNegative = (props: ButtonNegativeProps) => {
  const { onPress } = props;
  return (
    <RectButton onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="times" size={24} color="black" />
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.colors.negative,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonNegative;
