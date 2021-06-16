import React from "react";
import * as SH from "~shared";
import * as S from "./ValidateTicket.styles";
import styled from "styled-components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";
import axios from "axios";
import { useUserInfo } from "~hooks";

export const ValidateTicket = () => {
  const { navigate } = useNavigation();
  const { selectedDiscount, selectedTicket, setSelectedOrderId } =
    useSelectedTicket();
  const { data, refetch, isLoading } = useUserInfo();

  if (selectedTicket.isLoading || selectedDiscount.isLoading || isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }
  const price =
    selectedTicket.findTicket?.basePrice * selectedDiscount.findDiscount.value;
  const currentBalance = data?.balanceAccount - price;
  const confrimOrder = () => {
    if (currentBalance < 0) {
      alert("Za mało pieniędzy doładuj konto!");
      navigate("Wróć");
      return;
    }
    axios
      .post<IServerResource>("http://localhost:1337/customer-order-mobilets", {
        discount: `${selectedDiscount.findDiscount.id}`,
        ticket: `${selectedTicket.findTicket.id}`,
        customerId: "1",
        quantity: 1,
      })
      .then((response) => {
        const { data } = response;
        updateBalance();
        setSelectedOrderId(data.id);
        navigate("PreviewTicket");
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const updateBalance = () => {
    axios
      .put("http://localhost:1337/users/1", {
        balanceAccount: currentBalance,
      })
      .then(() => {
        refetch();
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  return (
    <SH.Container.ContainerWhite>
      <SH.Container.ContainerRed height={219}>
        <SH.Text.Text18 white>Rodzaj biletu</SH.Text.Text18>
        <SH.Text.Text18 white>Kraków ZTP</SH.Text.Text18>
        <SH.Text.Text18 white>{selectedTicket.findTicket?.name}</SH.Text.Text18>
        <S.ContainerFooter>
          <SH.Text.Text16 white>Ilość biletów</SH.Text.Text16>
          <View>
            <SH.Text.Text16 white>Opłata</SH.Text.Text16>
            <SH.Text.Text18 white bold>
              {price.toFixed(2)} PLN
            </SH.Text.Text18>
          </View>
        </S.ContainerFooter>
      </SH.Container.ContainerRed>
      <SH.Button.ButtonBlue onPress={confrimOrder}>
        <SH.Text.Text18 bold white>
          SKASUJ BILET
        </SH.Text.Text18>
      </SH.Button.ButtonBlue>
    </SH.Container.ContainerWhite>
  );
};

interface IServerResource {
  id: number;
}
