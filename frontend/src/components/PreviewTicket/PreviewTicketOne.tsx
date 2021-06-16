import React from "react";
import * as SH from "~shared";
import * as S from "./PreviewTicket.styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";

export const PreviewTicketOne = () => {
  const { selectedOrder } = useSelectedTicket();

  if (selectedOrder.isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }
  return (
    <SH.Container.ContainerRed height={343}>
      <SH.Container.ContainerFlexRow center>
        <SH.Text.Text18 white bold>
          Komunikacja miejska w Krakowie
        </SH.Text.Text18>
      </SH.Container.ContainerFlexRow>

      <S.ContainerInfo>
        <SH.Text.Text18 white>Bilet</SH.Text.Text18>
        <SH.Text.Text18 white bold>
          {selectedOrder.findOrder.ticket.name}
        </SH.Text.Text18>
        <SH.Text.Text18 white>Ważny od </SH.Text.Text18>
        <SH.Text.Text18 white bold>
          {new Date(
            Date.parse(selectedOrder.findOrder.ticket.published_at)
          ).toLocaleString()}
        </SH.Text.Text18>
        <SH.Text.Text18 white>Numer biletu </SH.Text.Text18>
        <SH.Text.Text18 white>
          KRK {selectedOrder.findOrder.ticket.id}
        </SH.Text.Text18>
        <SH.Text.Text18 white>Numer transakcji: </SH.Text.Text18>
        <SH.Text.Text18 white>
          {Date.parse(selectedOrder.findOrder.ticket.published_at)}
          {selectedOrder.findOrder.id}
        </SH.Text.Text18>
      </S.ContainerInfo>

      <S.ContainerBorder>
        <SH.Text.Text18 white bold center>
          {" "}
          {(
            (5 * Date.parse(selectedOrder.findOrder.ticket.published_at)) /
            10000
          ).toFixed(0)}
          {selectedOrder.findOrder.id}{" "}
        </SH.Text.Text18>
      </S.ContainerBorder>
    </SH.Container.ContainerRed>
  );
};
