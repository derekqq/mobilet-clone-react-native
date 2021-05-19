import { StatusBar } from "expo-status-bar";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import * as SH from "~shared";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SH.Container.ContainerSafe>
        <StackNavigator />
      </SH.Container.ContainerSafe>
    </NavigationContainer>
  );
}
