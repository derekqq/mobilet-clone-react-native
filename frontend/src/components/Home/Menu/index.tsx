import * as React from "react";
import * as SH from "~shared";
import * as S from "./Menu.styles";
import * as SVG from "./assets";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const { navigate } = useNavigation();
  return (
    <SH.Container.ContainerWhite>
      <S.Row>
        <S.MenuButton onPress={() => navigate("PreviewTicket")}>
          <SVG.CurrentTicket />
          <SH.Text.Text18 white>ostatni bilet</SH.Text.Text18>
        </S.MenuButton>
        <S.MenuButton onPress={() => navigate("ChooseDiscount")}>
          <SVG.Bus />
          <SH.Text.Text18 white>kup bilet</SH.Text.Text18>
        </S.MenuButton>
      </S.Row>
      <S.Row>
        <S.MenuButton onPress={() => navigate("HistoryTicket")}>
          <SVG.HistoryTicket />
          <SH.Text.Text18 white>historia biletów</SH.Text.Text18>
        </S.MenuButton>
        <S.MenuButton onPress={() => navigate("TopUpAccount")}>
          <SVG.TopUp />
          <SH.Text.Text18 white>doładuj konto</SH.Text.Text18>
        </S.MenuButton>
      </S.Row>
    </SH.Container.ContainerWhite>
  );
};
