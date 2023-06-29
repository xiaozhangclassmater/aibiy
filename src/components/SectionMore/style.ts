import { styled } from "styled-components";

interface SectionMoreWapperProps {
  mTop?: string
}

export const SectionMoreWapper = styled.div<SectionMoreWapperProps>`
  cursor: ${props => props.theme.SmallHand};
  margin-top: ${[props => props.mTop]};
  .text{
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.secondColor};
  }
`