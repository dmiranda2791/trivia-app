import React from "react";
import ButtonRounded from "./ButtonRounded";

interface ButtonSkipProps {
  onPress: () => void;
  style?: ViewStyle;
}

const ButtonSkip = (props: ButtonSkipProps) => {
  const { onPress, style } = props;
  return (
    <ButtonRounded
      style={style}
      variant="neutral"
      iconName="step-forward"
      onPress={onPress}
    />
  );
};

export default ButtonSkip;
