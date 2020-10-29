import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StyleGuide from "../StyleGuide";

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer = (props: ScreenContainerProps) => {
  return (
    <ImageBackground
      source={StyleGuide.backgroundImage}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
  },
});

export default ScreenContainer;
