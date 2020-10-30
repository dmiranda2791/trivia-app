import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Question from "../screens/Question";
import Results from "../screens/Results";

const Stack = createStackNavigator();

export type ScreenParams = {
  Question: undefined;
  Results: undefined;
  Welcome: undefined;
};

const Navigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default Navigator;
