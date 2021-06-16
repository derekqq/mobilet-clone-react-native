import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Navigation } from "~components/Home/Navigation";
import { ChooseDiscountList } from "~components/ChooseDiscountList";
import { RootStackParamList } from "~types/navigation.types";

export const ChooseDiscountScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "ChooseTicket">) => {
  return (
    <>
      <ChooseDiscountList />
    </>
  );
};
