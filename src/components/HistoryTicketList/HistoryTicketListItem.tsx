import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as SH from "~shared";
import { useDiscountById, useTicketById, useSelectedTicket } from "~hooks";

export const HistoryTicketListItem = (item: TProps) => {
  const discount = useDiscountById(item.discount);
  const ticket = useTicketById(item.ticket);
  const { navigate } = useNavigation();
  const { setSelectedOrderId } = useSelectedTicket();

  if (discount.isLoading || ticket.isLoading) {
    return <SH.Text.Text16>"Wczytywanie ..."</SH.Text.Text16>;
  }
  const showDetailsTicket = () => {
    setSelectedOrderId(item.id);
    navigate("PreviewTicket");
  };
  return (
    <SH.Button.ListItem onPress={showDetailsTicket}>
      <SH.Text.Text16>
        {ticket.findTicket.name}{" "}
        {discount.findDiscount.name.charAt(0).toLocaleUpperCase()}
      </SH.Text.Text16>
      <SH.Text.Text16>Kraków ZTP</SH.Text.Text16>
      <SH.Text.Text16 bold>
        {(ticket.findTicket.basePrice * discount.findDiscount.value).toFixed(2)}
      </SH.Text.Text16>
    </SH.Button.ListItem>
  );
};

type TProps = {
  id: number;
  quantity: number;
  discount: number;
  ticket: number;
  customerId: number;
  published_at: string;
  created_at: string;
  updated_at: string;
};
