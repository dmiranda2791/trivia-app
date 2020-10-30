import { TextStyle } from "react-native";

interface Colors {
  primary: string;
  white: string;
  progress: string;
  positive: string;
  negative: string;
  neutral: string;
  border: string;
}

const colors: Colors = {
  primary: "#604DC6",
  white: "#FFFFFF",
  progress: "#EDF27C",
  positive: "#4DCE6C",
  negative: "#D83E3E",
  neutral: "#FFFFFF",
  border: "#707070",
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
    lg: TextStyle;
    md: TextStyle;
    sm: TextStyle;
    xs: TextStyle;
  };
  backgroundImage: number;
  fonts: Fonts;
}

const StyleGuide: StyleGuide = {
  colors,
  fonts,
  text: {
    lg: {
      fontFamily: fonts.primary,
      fontSize: 40,
    },
    md: {
      fontFamily: fonts.primary,
      fontSize: 30,
    },
    sm: {
      fontFamily: fonts.primary,
      fontSize: 22,
    },
    xs: {
      fontFamily: fonts.primary,
      fontSize: 15,
    },
  },
  backgroundImage: require("../assets/background.png"),
};

export default StyleGuide;
