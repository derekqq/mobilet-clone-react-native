import React from "react";
import { View } from "react-native";
import * as SH from "~shared";
import * as S from "./TicketList.styles";

export const TicketList = () => {
  const discount = 0.5;
  return (
    <S.ContainerScroll>
      {price.map((item, index) => (
        <SH.Button.ListItem key={index}>
          <SH.Text.Text16>{item.name}</SH.Text.Text16>
          <SH.Text.Text16>{item.companyName}</SH.Text.Text16>
          <SH.Text.Text16 bold>
            {(item.price * discount).toFixed(2)}
          </SH.Text.Text16>
        </SH.Button.ListItem>
      ))}
    </S.ContainerScroll>
  );
};

const price = [
  {
    name: `20-minutowy I+II+III Agl`,
    price: 4,
    companyName: "Kraków ZTP",
  },
  {
    name: `1 prz/60 min. I+II+III Agl `,
    price: 6,
    companyName: "Kraków ZTP",
  },
  {
    name: `90 minutowy I+II+III Agl `,
    price: 8,
    companyName: "Kraków ZTP",
  },
  {
    name: `24 godzinny I Miasto`,
    price: 17,
    companyName: "Kraków ZTP",
  },
  {
    name: `24 godzinny I+II+III Agl`,
    price: 22,
    companyName: "Kraków ZTP",
  },
  {
    name: `48 godzinny I+II+III Agl`,
    price: 35,
    companyName: "Kraków ZTP",
  },
  {
    name: `72 godzinny I+II+III Agl`,
    price: 50,
    companyName: "Kraków ZTP",
  },
  {
    name: `7 dni I Miasto`,
    price: 56,
    companyName: "Kraków ZTP",
  },
  {
    name: `7 dni I+II+III Agl`,
    price: 68,
    companyName: "Kraków ZTP",
  },
  {
    name: `Gr. do 20 os. I+II+III Agl`,
    price: 60,
    companyName: "Kraków ZTP",
  },
];
