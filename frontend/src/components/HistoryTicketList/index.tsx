import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./HistoryTicketList.styles";
import { useNavigation } from "@react-navigation/native";
import { HistoryTicketListItem } from "./HistoryTicketListItem";
import { useUserInfo } from "~hooks";

export const HistoryTicketList = () => {
  const discount = 0.5;
  const { isLoading, data } = useUserInfo();

  if (isLoading) {
    return <SH.Text.Text16>Wczytywanie ...</SH.Text.Text16>;
  }
  const { customer_order_mobilets: listTicket } = data as TData;
  return (
    <S.ContainerScroll>
      {listTicket.map((item) => (
        <HistoryTicketListItem key={item.id} {...item}></HistoryTicketListItem>
      ))}
    </S.ContainerScroll>
  );
};

type TData = {
  customer_order_mobilets: {
    id: number;
    quantity: number;
    discount: number;
    ticket: number;
    customerId: number;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
};
