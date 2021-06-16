import React from "react";
import * as SH from "~shared";
import styled from "styled-components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelectedTicket } from "~hooks";

export const PreviewTicket = () => {
  const { navigate } = useNavigation();
  const { selectedDiscount, selectedTicket } = useSelectedTicket();

  if (selectedTicket.isLoading || selectedDiscount.isLoading) {
    return <SH.Text.Text16 white>Ładowanie...</SH.Text.Text16>;
  }

  return (
    <SH.Container.ContainerRed height={343}>
      <SH.Text.Text18 white>Rodzaj biletu</SH.Text.Text18>
      <SH.Text.Text18 white>Kraków ZTP</SH.Text.Text18>
      <SH.Text.Text18 white>{selectedTicket.findTicket?.name}</SH.Text.Text18>
    </SH.Container.ContainerRed>
  );
};
