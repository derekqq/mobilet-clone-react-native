import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./HistoryTicketList.styles";
import { useNavigation } from "@react-navigation/native";
import {HistoryTicketListItem} from './HistoryTicketListItem'
import {useUserInfo} from '~hooks'


export const TicketList = () => {

  const discount = 0.5;
  const { isLoading ,data} = useUserInfo();
  const listTicket = data as TTicketList;

  if (isLoading) {
    return <SH.Text.Text16>"Wczytywanie ..."</SH.Text.Text16>;
  }
  return (
    <S.ContainerScroll>
      {listTicket.map((item) => (
       
      ))}
    </S.ContainerScroll>
  );
};

type TTicketList = {
  name: string;
  basePrice: number;
  id: number;
}[];
