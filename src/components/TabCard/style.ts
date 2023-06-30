import { styled } from "styled-components";

export const TabCardWapper = styled.div`
  height: 60px;
  .tab-container{
    display: flex;
    width: 1032px;
    height: 100%;
    white-space: nowrap;
    align-items: center;
    .leftIcon,.rightIcon{
      display: flex;
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      min-width: 30px;
      border-radius: 50%;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      cursor: ${props => props.theme.SmallHand};
      box-shadow: var(--e-swdx-p);
    }
    .tab-content{
      display: flex;
      overflow: scroll;
      &::-webkit-scrollbar{
        display: none;
      }
      .tab-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 40px;
        flex-shrink: 0;
        min-width: 120px;
        text-align: center;
        border: 1px solid #e9e9e8;
        border-radius: 5px;
        margin: 0 5px;
        padding: 10px;
        box-sizing: border-box;
        transition: all .3s;
        cursor: ${props => props.theme.SmallHand};
        &:hover{
          box-shadow: var(--e-swdx-p);
        }
        &:first-child{
          margin-left: 0px;
        }
      }
    }
    
    .active-item {
      background-color: ${props => props.theme.secondColor};
      color: #fff;
    }
    /* overflow-x : scroll; */
  }
`