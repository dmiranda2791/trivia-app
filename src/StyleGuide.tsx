import { TextStyle } from "react-native";

interface Colors {
  primary: string;
  white: string;
  progress: string;
}

const colors: Colors = {
  primary: "#604DC6",
  white: "#FFFFFF",
  progress: "#EDF27C",
};

interface Fonts {
  primary: string;
}

const fonts: Fonts = {
  primary: "IrishGroverRegular",
};

interface StyleGuide {
  colors: Colors;
  text: {
    title: TextStyle;
    body: TextStyle;
  };
  backgroundImage: number;
  fonts: Fonts;
}

const StyleGuide: StyleGuide = {
  colors,
  fonts,
  text: {
    title: {
      fontFamily: fonts.primary,
      fontSize: 40,
      color: colors.white,
      textAlign: "center",
    },
    body: {
      fontFamily: fonts.primary,
      fontSize: 30,
      color: colors.white,
      textAlign: "center",
    },
  },
  backgroundImage: require("../assets/background.png"),
};

export default StyleGuide;
