import styled from "styled-components";
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

export const ContainerRed = styled(View)<TPropsContainerRed>`
  background-color: #bf0007;
  width: 100%;
  margin: 0 auto;
  width: ${({ height }) => (height ? `${height}px` : `auto`)};
`;

export const ContainerWhite = styled(View)`
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 8px;
`;

export const ContainerSafe = styled(SafeAreaView)`
  background: #fff;
  width: 100%;
  height: 100%;
`;

type TPropsContainerRed = {
  height: number;
};
