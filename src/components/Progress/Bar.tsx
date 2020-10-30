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
    <View>
      <View onLayout={onLayout} style={[styles.bar, styles.incomplete]} />
      <Animated.View style={[styles.bar, styles.complete, animatedStyleB]} />
    </View>
  );
};
const HEIGHT = 20;
const styles = StyleSheet.create({
  bar: {
    height: HEIGHT,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  incomplete: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: StyleGuide.colors.white,
    alignSelf: "stretch",
  },
  complete: {
    backgroundColor: StyleGuide.colors.progress,
  },
});

export default Bar;
