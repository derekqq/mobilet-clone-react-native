import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./TicketList.styles";
import { useNavigation } from "@react-navigation/native";
import { useQueryTickets } from "./TicketList.hooks";
export const TicketList = () => {
  const { navigate } = useNavigation();
  const discount = 0.5;
  const { isLoading, error, data, refetch } = useQueryTickets();
  const listTicket = data as TTicketList;

  return (
    <S.ContainerScroll>
      {isLoading ? (
        <SH.Text.Text16>"Wczytywanie ..."</SH.Text.Text16>
      ) : (
        listTicket.map(({ id, name, basePrice }) => (
          <SH.Button.ListItem
            key={id}
            onPress={() => navigate("ValidateTicket")}
          >
            <SH.Text.Text16>{name}</SH.Text.Text16>
            <SH.Text.Text16>Kraków ZTP</SH.Text.Text16>
            <SH.Text.Text16 bold>
              {(basePrice * discount).toFixed(2)}
            </SH.Text.Text16>
          </SH.Button.ListItem>
        ))
      )}
    </S.ContainerScroll>
  );
};
