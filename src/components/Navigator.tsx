import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Question from "../screens/Question";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Question" component={Question} />
    </Stack.Navigator>
  );
};

export default Navigator;
