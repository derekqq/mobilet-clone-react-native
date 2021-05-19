import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Navigation } from "~components/Home/Navigation";
import { Menu } from "~components/Home/Menu";
import { RootStackParamList } from "~types/navigation.types";

export const ChooseDiscount = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ChooseTicket">) => {
  return (
    <>
      <Menu />
    </>
  );
};
