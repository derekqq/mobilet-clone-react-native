import styled, { css } from "styled-components";
import * as SH from "~shared";
import { View } from "react-native";

export const ContainerInfo = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
`;

export const ContainerBorder = styled(View)`
  padding: 8px;
  margin: 0 32px 10px;
  border: 2px solid #fff;
`;

export const ContainerQRcode = styled(View)`
  border: 20px solid #fff;
`;
