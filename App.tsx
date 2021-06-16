import { StatusBar } from "expo-status-bar";
import React from "react";

import { HomeScreen } from "./screens/HomeScreen";
import * as SH from "~shared";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SH.Container.ContainerSafe>
          <StackNavigator />
        </SH.Container.ContainerSafe>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
