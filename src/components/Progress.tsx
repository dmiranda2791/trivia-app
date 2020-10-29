import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyleGuide from "../StyleGuide";

interface ProgressProps {
  progress: number;
}

const Progress = (props: ProgressProps) => {
  const { progress } = props;
  return (
    <View style={styles.containter}>
      <View style={[styles.bar, styles.incomplete]}>
        <View
          style={[
            styles.bar,
            styles.complete,
            { width: `${Math.floor(progress * 100)}%` },
          ]}
        />
      </View>
      <Text style={styles.text}>1/10</Text>
    </View>
  );
};

const HEIGHT = 20;

const styles = StyleSheet.create({
  containter: { alignSelf: "stretch" },
  bar: {
    height: HEIGHT,
    borderRadius: 50,
  },
  incomplete: {
    backgroundColor: StyleGuide.colors.white,
  },
  complete: {
    backgroundColor: StyleGuide.colors.progress,
    borderRightWidth: 4,
    borderRightColor: "black",
  },
  text: {
    ...StyleGuide.text.body,
    fontSize: 25,
    marginTop: 15,
  },
});

export default Progress;
