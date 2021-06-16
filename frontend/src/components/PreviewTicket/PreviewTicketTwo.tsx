import React from "react";
import * as SH from "~shared";
import * as S from "./PreviewTicket.styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";

export const PreviewTicketTwo = () => {
  const { navigate } = useNavigation();
  const { selectedOrder } = useSelectedTicket();

  if (selectedOrder.isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }
  return (
    <SH.Container.ContainerRed height={250}>
      <SH.Container.ContainerFlexRow center>
        <SH.Text.Text18 white bold>
          Komunikacja miejska w Krakowie
        </SH.Text.Text18>
      </SH.Container.ContainerFlexRow>

      <S.ContainerInfo>
        <SH.Text.Text18 white>Cena</SH.Text.Text18>
        <SH.Text.Text18 white bold>
          {(
            selectedOrder.findOrder.ticket.basePrice *
            selectedOrder.findOrder.discount.value
          ).toFixed(2)}{" "}
          PLN
        </SH.Text.Text18>

        <SH.Text.Text18 white>Numer transakcji: </SH.Text.Text18>
        <SH.Text.Text18 white>
          {Date.parse(selectedOrder.findOrder.ticket.published_at)}
          {selectedOrder.findOrder.id}
        </SH.Text.Text18>
      </S.ContainerInfo>

      <S.ContainerBorder>
        <SH.Text.Text18 white bold center>
          {new Date(
            Date.parse(selectedOrder.findOrder.ticket.published_at)
          ).toLocaleString()}
        </SH.Text.Text18>
      </S.ContainerBorder>
    </SH.Container.ContainerRed>
  );
};
