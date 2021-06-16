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

export const ContainerQRcode = styled(View)<TPropsCircle>`
  border: 20px solid #fff;
`;

export const Circle = styled(View)<TPropsCircle>`
  border-radius: 50;
  width: 20px;
  height: 20px;
  background-color: #7d7d7d;

  ${({ active }) =>
    active &&
    css`
      background-color: #ff0000;
    `}
`;

export const CircleWrapper = styled(View)`
  margin-top: auto;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`;
type TPropsCircle = {
  active?: boolean;
};
