import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";

export const ButtonBlue = styled(TouchableOpacity)`
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #1162a4;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ListItem = styled(TouchableOpacity)`
  height: 71px;
  width: 100%;
  border-left-color: #bf0007;
  border-left-width: 8px;
  border-style: solid;
  border-bottom-color: #ededed;
  border-bottom-width: 3px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 11px;
`;
