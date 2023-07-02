import { styled } from "styled-components";

export const TabCardWapper = styled.div`
    display: flex;
    width: 1032px;
    height: 60px;
    white-space: nowrap;
    align-items: center;
    .active-item {
      background-color: ${props => props.theme.secondColor};
      color: #fff;
    }
`