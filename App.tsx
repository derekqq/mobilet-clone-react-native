import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { HomeScreen } from "./screens/HomeScreen";
import * as SH from "~shared";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Provider } from "./context";

const queryClient = new QueryClient();

export default function App() {
  const [selectedTicketId, setSelectedTicketId] = useState(1);
  const [selectedDiscountId, setSelectedDiscountId] = useState(1);
  const [selectedOrderId, setSelectedOrderId] = useState(1);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider
        value={{
          setSelectedTicketId,
          setSelectedDiscountId,
          setSelectedOrderId,
          selectedValue: {
            selectedTicketId,
            selectedDiscountId,
            selectedOrderId,
          },
        }}
      >
        <NavigationContainer>
          <SH.Container.ContainerSafe>
            <StackNavigator />
          </SH.Container.ContainerSafe>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
