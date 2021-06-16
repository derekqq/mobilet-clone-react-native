import { Text } from "react-native";
import styled, { css } from "styled-components";

export const BaseText = styled(Text)<TPropsText>`
  color: #000;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ white }) =>
    white &&
    css`
      color: #fff;
    `}
    ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Text16 = styled(BaseText)<TPropsText>`
  font-size: 16px;
`;
export const Text18 = styled(BaseText)<TPropsText>`
  font-size: 18px;
`;
export const Text20 = styled(BaseText)<TPropsText>`
  font-size: 20px;
`;

type TPropsText = {
  white?: boolean;
  bold?: boolean;
  center?: boolean;
};
