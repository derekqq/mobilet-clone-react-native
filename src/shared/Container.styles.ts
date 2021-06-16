import styled, { css } from "styled-components";
import { View, SafeAreaView } from "react-native";

export const ContainerrBlueHome = styled(View)`
  background-color: #1162a4;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 16px; ;
`;

export const ContainerBlueNavbar = styled(ContainerrBlueHome)`
  height: 10%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ContainerFlexRow = styled(View)<TPropsContainerFlexRow>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const ContainerRed = styled(View)<TPropsContainerRed>`
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding: 16px 8px;

  background-color: #bf0007;
  width: 100%;
  margin: 0 auto;
  height: ${({ height }) => (height ? `${height}px` : `auto`)};
`;

export const ContainerWhite = styled(View)`
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  padding: 8px;
`;

export const ContainerSafe = styled(SafeAreaView)`
  background: #fff;
  width: 100%;
  height: 100%;
  flex: 1;
`;

type TPropsContainerRed = {
  height: number;
};

type TPropsContainerFlexRow = {
  center: boolean;
};
