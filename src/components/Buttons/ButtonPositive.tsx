import React from "react";
import StyleGuide from "../../StyleGuide";
import ButtonRounded from "./ButtonRounded";

interface ButtonPositiveProps {
  onPress: () => void;
}

const ButtonPositive = (props: ButtonPositiveProps) => {
  const { onPress } = props;
  return (
    <ButtonRounded
      variant="positive"
      iconName="check"
      onPress={onPress}
      iconColor={StyleGuide.colors.white}
    />
  );
};

export default ButtonPositive;
