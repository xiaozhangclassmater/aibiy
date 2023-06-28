import { styled } from "styled-components";

export const TabCardWapper = styled.div`
  height: 60px;
  .tab-container{
    display: flex;
    width: 1032px;
    height: 100%;
    align-items: center;
    .leftIcon,.rightIcon{
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      cursor: ${props => props.theme.SmallHand};
      box-shadow: var(--e-swdx-p);
    }
    .tab-item{
      width: 90px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #e9e9e8;
      border-radius: 5px;
      margin: 0 5px;
      cursor: ${props => props.theme.SmallHand};
      &:first-child{
        margin-left: 0px;
      }
    }
    .active-item {
      background-color: ${props => props.theme.secondColor};
      color: #fff;
    }
    /* overflow-x : scroll; */
  }
`