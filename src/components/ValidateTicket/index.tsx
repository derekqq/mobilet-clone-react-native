import React from "react";
import * as SH from "~shared";
import * as S from "./ValidateTicket.styles";
import styled from "styled-components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ValidateTicket = () => {
  const { navigate } = useNavigation();

  return (
    <SH.Container.ContainerWhite>
      <S.ContainerRed height={219}>
        <SH.Text.Text18 white>Rodzaj biletu</SH.Text.Text18>
        <SH.Text.Text18 white>Kraków ZTP</SH.Text.Text18>
        <SH.Text.Text18 white>20 min U I+II+III Aglomeracja</SH.Text.Text18>
        <S.ContainerFooter>
          <SH.Text.Text16 white>Ilość biletów</SH.Text.Text16>
          <View>
            <SH.Text.Text16 white>Opłata</SH.Text.Text16>
            <SH.Text.Text18 white bold>
              2,00 PLN
            </SH.Text.Text18>
          </View>
        </S.ContainerFooter>
      </S.ContainerRed>
      <SH.Button.ButtonBlue>
        <SH.Text.Text18 bold white>
          SKASUJ BILET
        </SH.Text.Text18>
      </SH.Button.ButtonBlue>
    </SH.Container.ContainerWhite>
  );
};
