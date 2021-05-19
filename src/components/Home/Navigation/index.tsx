import * as React from "react";
import * as SH from "~shared";

import Logo from "./logo.png";
import * as S from "./Navigation.styles";

export const Navigation = () => {
  return (
    <SH.Container.ContainerrBlueHome>
      <S.LogoImage source={Logo} />
      <SH.Text.Text18 white>34.56PLN</SH.Text.Text18>
      <SH.Text.Text18 white>Stan konta</SH.Text.Text18>
    </SH.Container.ContainerrBlueHome>
  );
};
