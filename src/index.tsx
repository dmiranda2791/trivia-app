import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./store";
import StyleGuide from "./StyleGuide";

const mapStateToProps = (state: RootState) => ({
  visibleQuestion: state.trivia.visibleQuestion,
});

const connector = connect(mapStateToProps, null);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IndexProps = PropsFromRedux & {
  visibleQuestion: string;
};

export const Index = (props: IndexProps) => {
  const { visibleQuestion } = props;
  return (
    <View>
      <Text style={styles.text}>Visible Question: {visibleQuestion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...StyleGuide.text.title,
  },
});

export default connector(Index);
