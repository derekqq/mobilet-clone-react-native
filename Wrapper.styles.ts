import styled from "styled-components";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";

export const WrapperSafeAreaView = styled(SafeAreaView)`
  background-color: #fbf8f8;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperView = styled(View)`
  background-color: #fbf8f8;
  flex: 0.8;
  align-items: center;
  justify-content: center;
`;

export const WrapperNav = styled(View)`
  background-color: #1162a4;
  width: 100%;
  height: 20%;
  color: #fbf8f8;
  flex: 0.2;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

export const TextNav = styled(Text)`
  color: #fbf8f8;
  font-size: 16px;
`;

// export const BoxTouchable = styled(TouchableOpacity)``;
