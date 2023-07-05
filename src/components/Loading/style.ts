import { styled } from "styled-components";

export const LoadingWapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .ant-spin-dot-item{
    background-color: ${props => props.theme.primaryColor} !important;
  }
`