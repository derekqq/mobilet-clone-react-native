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
        options={{ title: "Kup bilet" }}
        name="ChooseDiscount"
        component={Screen.ChooseDiscountScreen}
      />
      <Stack.Screen
        options={{ title: "ulgowy" }}
        name="TicketList"
        component={Screen.TicketListScreen}
      />
      <Stack.Screen
        options={{ title: "Kraków ZTP" }}
        name="ValidateTicket"
        component={Screen.ValidateTicketScreen}
      />
      <Stack.Screen
        options={{ title: "Historia biletów" }}
        name="HistoryTicket"
        component={Screen.HistoryTicketScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PreviewTicket"
        component={Screen.PreviewTicketScreen}
      />
    </Stack.Navigator>
  );
};
