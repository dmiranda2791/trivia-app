import React from "react";
import ButtonRounded from "./ButtonRounded";

interface ButtonNegativeProps {
  onPress: () => void;
}

const ButtonNegative = (props: ButtonNegativeProps) => {
  const { onPress } = props;
  return (
    <ButtonRounded variant="negative" iconName="times" onPress={onPress} />
  );
};

export default ButtonNegative;
