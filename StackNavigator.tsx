import React from "react";
import * as Screen from "~screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1162a4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Wróć"
        component={Screen.HomeScreen}
      />
      <Stack.Screen
        options={{ title: "Wybierz ulge" }}
        name="ChooseDiscount"
        component={Screen.ChooseDiscount}
      />
    </Stack.Navigator>
  );
};
