import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";

export const Row = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0.55;
  justify-content: space-between;
  width: 100%;
  align-content: space-between;
  max-height: 235px;
  padding: 4px 0;
`;

export const Col = styled(View)`
  padding: 0 16px;
`;

export const MenuButton = styled(TouchableOpacity)`
  flex: 0.5;
  margin: 0 4px;
  width: 100%;
  height: 100%;
  background: #bf0007;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  padding: 45px 0;
  flex-direction: column;
`;
