import * as SH from "~shared";
import styled from "styled-components";
import { View } from "react-native";
export const ContainerRed = styled(SH.Container.ContainerRed)`
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
`;

export const ContainerFooter = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
