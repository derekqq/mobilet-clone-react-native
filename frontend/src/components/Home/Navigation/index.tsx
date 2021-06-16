import * as React from "react";
import * as SH from "~shared";
import Logo from "./logo.png";
import * as S from "./Navigation.styles";
import { useUserInfo } from "~hooks";

export const Navigation = () => {
  const { isLoading, error, data, refetch } = useUserInfo();

  return (
    <SH.Container.ContainerrBlueHome>
      <S.LogoImage source={Logo} />
      <SH.Container.ContainerFlexRow center>
        <SH.Text.Text18 white>
          {isLoading ? "Loading..." : `${data?.balanceAccount.toFixed(2)} PLN`}
        </SH.Text.Text18>
        <SH.Button.Refresh onPress={() => refetch()}>
          <SH.Assets.Refresh></SH.Assets.Refresh>
        </SH.Button.Refresh>
      </SH.Container.ContainerFlexRow>
      <SH.Text.Text16 white>Stan konta</SH.Text.Text16>
    </SH.Container.ContainerrBlueHome>
  );
};
