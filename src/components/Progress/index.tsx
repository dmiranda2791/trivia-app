import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  useSharedValue,
  useDerivedValue,
  withSpring,
  interpolate,
} from "react-native-reanimated";

import Bar from "./Bar";
import Icon from "./Icon";

interface ProgressProps {
  progress: number;
  total: number;
  current: number;
}

const Progress = (props: ProgressProps) => {
  const { total, current, progress } = props;
  const [PROGRESS_BAR_WIDTH, setProgressBarWidth] = useState(0);

  const progressAnimated = useSharedValue(progress);

  const translateX = useDerivedValue(() =>
    withSpring(
      interpolate(progressAnimated.value, [0, 1], [0, PROGRESS_BAR_WIDTH - 15])
    )
  );
  const onLayout = React.useCallback(
    (event) => {
      setProgressBarWidth(event.nativeEvent.layout.width);
    },
    [setProgressBarWidth]
  );

  return (
    <View style={styles.containter}>
      <Bar onLayout={onLayout} progress={translateX} />

      <Icon current={current} total={total} progress={translateX} />
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    width: "100%",
  },
});

export default Progress;
