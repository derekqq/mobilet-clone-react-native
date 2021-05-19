import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./ChooseDiscountList.styles";
import { useNavigation } from "@react-navigation/native";

export const ChooseDiscountList = () => {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <SH.Button.ListItem onPress={() => navigate("TicketList")}>
        <SH.Text.Text16>normalny</SH.Text.Text16>
      </SH.Button.ListItem>
      <SH.Button.ListItem onPress={() => navigate("TicketList")}>
        <SH.Text.Text16>ulgowy</SH.Text.Text16>
      </SH.Button.ListItem>
    </S.Container>
  );
};
