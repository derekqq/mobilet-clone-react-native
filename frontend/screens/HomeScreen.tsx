import * as React from "react";
import { Navigation } from "~components/Home/Navigation";
import { Menu } from "~components/Home/Menu";
import { RootStackParamList } from "~types/navigation.types";
import { StackScreenProps } from "@react-navigation/stack";

export const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <Menu />
    </>
  );
};
