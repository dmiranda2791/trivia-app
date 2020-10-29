import React from "react";
import ButtonRounded from "./ButtonRounded";

interface ButtonPositiveProps {
  onPress: () => void;
}

const ButtonPositive = (props: ButtonPositiveProps) => {
  const { onPress } = props;
  return (
    <ButtonRounded variant="positive" iconName="check" onPress={onPress} />
  );
};

export default ButtonPositive;
