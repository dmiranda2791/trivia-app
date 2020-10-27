import React from "react";
import { Text, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "./store";

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
      <Text>Visible Question: {visibleQuestion}</Text>
    </View>
  );
};

export default connector(Index);
