import React from "react";
import StyleGuide from "../../StyleGuide";
import ButtonRounded from "./ButtonRounded";

interface ButtonNegativeProps {
  onPress: () => void;
}

const ButtonNegative = (props: ButtonNegativeProps) => {
  const { onPress } = props;
  return (
    <ButtonRounded
      variant="negative"
      iconName="times"
      onPress={onPress}
      iconColor={StyleGuide.colors.white}
    />
  );
};

export default ButtonNegative;
