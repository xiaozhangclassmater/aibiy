import { styled } from "styled-components";

interface SectionFooterWapperProps {
  mtop?: string
}

export const SectionFooterWapper = styled.div<SectionFooterWapperProps>`
  cursor: ${props => props.theme.SmallHand};
  margin-top: ${[props => props.mtop || '15px']};
  .text{
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.secondColor};
  }
  .icon{
    margin-left: 5px;
    color: ${props => props.theme.secondColor};
  }
`