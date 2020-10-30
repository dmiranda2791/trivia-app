import React from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import StyleGuide from "../../StyleGuide";

interface BarProps {
  onLayout(_: LayoutChangeEvent): void;
  progress: Animated.SharedValue<number>;
}

const Bar = (props: BarProps) => {
  const { onLayout, progress } = props;

  const animatedStyleB = useAnimatedStyle(() => {
    return {
      width: progress.value,
    };
  });
  return (
    <View style={styles.container}>
      <View onLayout={onLayout} style={[styles.bar, styles.incomplete]} />
      <Animated.View style={[styles.bar, styles.complete, animatedStyleB]} />
    </View>
  );
};
const HEIGHT = 20;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 15,
    shadowColor: StyleGuide.colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
  },
  bar: {
    height: HEIGHT,
    borderRadius: 8,
  },
  incomplete: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: StyleGuide.colors.primary,
    alignSelf: "stretch",
    borderColor: StyleGuide.colors.progress,
    borderWidth: 2,
  },
  complete: {
    borderColor: StyleGuide.colors.primary,
    backgroundColor: StyleGuide.colors.progress,
    borderWidth: 2,
    borderStyle: "solid",
  },
});

export default Bar;
