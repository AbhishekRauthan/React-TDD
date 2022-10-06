import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Label = styled("label")`
  z-index: -1;
  position: absolute;
  left: 0;
  text-transform: capitalize;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: ${theme.fontSizes.lg};
  top: -12px;
  color: ${theme.colors.black};
  left: 15px;
  .peer:placeholder-shown ~ & {
    color: ${theme.colors.blackAlpha[500]};
    font-size: ${theme.fontSizes["xl"]};
    top: 18px;
  }
`;
