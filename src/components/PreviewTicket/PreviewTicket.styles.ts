import styled, { css } from "styled-components";
import * as SH from "~shared";
import { View } from "react-native";

export const ContainerInfo = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerBorder = styled(View)`
  padding: 8px;
  margin-bottom: 10px;
  border: 2px solid #fff;
`;
