import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./ChooseDiscountList.styles";
import { useNavigation } from "@react-navigation/native";
import { useQueryDiscount } from "./ChooseDiscountList.hooks";
import { useSelectedTicket } from "~hooks";

export const ChooseDiscountList = () => {
  const { navigate } = useNavigation();
  const { isLoading, error, data } = useQueryDiscount();
  const { setSelectedDiscountId } = useSelectedTicket();

  const handleOnPress = (id: number) => {
    setSelectedDiscountId(id);
    navigate("TicketList");
  };

  if (isLoading) return <SH.Text.Text16>Wczytywanie ...</SH.Text.Text16>;

  const listDiscount = data as TData;

  return (
    <S.Container>
      {listDiscount.map((discount) => (
        <SH.Button.ListItem
          key={discount.id}
          onPress={() => handleOnPress(discount.id)}
        >
          <SH.Text.Text16>{discount.name}</SH.Text.Text16>
        </SH.Button.ListItem>
      ))}
    </S.Container>
  );
};

type TData = {
  created_at: string;
  id: number;
  name: string;
  published_at: string;
  value: number;
}[];
