import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import StyleGuide from "../../StyleGuide";

interface IconProps {
  current: number;
  total: number;
  progress: Animated.SharedValue<number>;
}

const Icon = (props: IconProps) => {
  const { current, total, progress } = props;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: progress.value }],
    };
  });

  return (
    <Animated.View style={[styles.containter, animatedStyle]}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/star.png")}
        />
        <Text style={[styles.text]}>
          {current}/{total}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containter: {
    ...StyleSheet.absoluteFillObject,
    top: -25,
    left: -15,
  },
  text: {
    ...StyleGuide.text.xs,
    ...StyleSheet.absoluteFillObject,
    top: 28,
    left: 20,
    color: StyleGuide.colors.primary,
  },
  image: { width: 70, height: 70 },
});

export default Icon;
