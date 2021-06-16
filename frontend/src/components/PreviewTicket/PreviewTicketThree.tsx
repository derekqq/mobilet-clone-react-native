import React from "react";
import * as SH from "~shared";
import * as S from "./PreviewTicket.styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";
import QRCode from "react-native-qrcode-svg";

export const PreviewTicketThree = () => {
  const { selectedOrder } = useSelectedTicket();

  if (selectedOrder.isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }
  return (
    <SH.Container.ContainerRed height={420}>
      <SH.Container.ContainerFlexRow center>
        <SH.Text.Text18 white bold>
          Komunikacja miejska w Krakowie
        </SH.Text.Text18>
      </SH.Container.ContainerFlexRow>
      <SH.Container.ContainerFlexRow startCenter>
        <S.ContainerQRcode>
          <QRCode
            size={250}
            value={
              "http://localhost:1337/customer-order-mobilets/" +
              selectedOrder.findOrder.id
            }
          />
        </S.ContainerQRcode>
      </SH.Container.ContainerFlexRow>
    </SH.Container.ContainerRed>
  );
};
