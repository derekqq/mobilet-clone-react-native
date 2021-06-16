import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as SH from "~shared";
import * as S from "./HistoryTicketList.styles";

export const HistoryTicketListItem = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <SH.Button.ListItem onPress={() => navigate("ValidateTicket")}>
      <SH.Text.Text16>{name}</SH.Text.Text16>
      <SH.Text.Text16>Kraków ZTP</SH.Text.Text16>
      <SH.Text.Text16 bold>{(basePrice * discount).toFixed(2)}</SH.Text.Text16>
    </SH.Button.ListItem>
  );
};
