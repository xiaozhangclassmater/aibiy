import { styled } from "styled-components";

export const HomeContentWapper = styled.div`
  .contnet-wapper{
    width: 1032px;
    height: 100%;
    margin: 0 auto;
    .title{
      font-size: 20px;
      font-weight: 700;
      color: ${props => props.theme.themeBorderHover};
    }
  }

`