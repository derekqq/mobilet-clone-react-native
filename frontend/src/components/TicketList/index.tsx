import React, { useContext } from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./TicketList.styles";
import { useNavigation } from "@react-navigation/native";
import { useQueryTickets } from "./TicketList.hooks";
import { useSelectedTicket } from "~hooks";

export const TicketList = () => {
  const { navigate } = useNavigation();
  const { isLoading, error, data, refetch } = useQueryTickets();
  const listTicket = data as TTicketList;
  const { setSelectedTicketId, selectedDiscount } = useSelectedTicket();

  const handleOnPress = (id: number) => {
    setSelectedTicketId(id);
    navigate("ValidateTicket");
  };

  if (isLoading || selectedDiscount.isLoading) {
    return <SH.Text.Text16>Wczytywanie ...</SH.Text.Text16>;
  }

  return (
    <S.ContainerScroll>
      {listTicket.map(({ id, name, basePrice }) => (
        <SH.Button.ListItem key={id} onPress={() => handleOnPress(id)}>
          <SH.Text.Text16>{name}</SH.Text.Text16>
          <SH.Text.Text16>Kraków ZTP</SH.Text.Text16>
          <SH.Text.Text16 bold>
            {(basePrice * selectedDiscount.findDiscount?.value).toFixed(2)}
          </SH.Text.Text16>
        </SH.Button.ListItem>
      ))}
    </S.ContainerScroll>
  );
};

type TTicketList = {
  id: number;
  basePrice: number;
  name: string;
}[];
