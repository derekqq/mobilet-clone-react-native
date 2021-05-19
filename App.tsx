import { StatusBar } from "expo-status-bar";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import * as SH from "~shared";

export default function App() {
  return (
    <SH.Container.ContainerSafe>
      <HomeScreen />
    </SH.Container.ContainerSafe>
  );
}
