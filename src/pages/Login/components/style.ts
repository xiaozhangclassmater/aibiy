import { styled } from "styled-components";

export const ScrollViewWapper = styled.div`
  display: flex;
  .content-wapper-hidden{
    width: 1032px;
    height: 45px;
    overflow: hidden;
    .render-content {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform .2s ease;
      .item {
        position: relative;
        display: flex;
        align-items: center;
       
        .tab-item{
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 40px;
          flex-shrink: 0;
          min-width: 150px;
          text-align: center;
          border: 1px solid #e9e9e8;
          border-radius: 5px;
          margin: 0 5px;
          padding: 10px;
          box-sizing: border-box;
          transition: transform .3s;
          user-select: none;
          cursor: ${props => props.theme.SmallHand};
        }
        .active{
          background-color: #e692d0;
        }
      }
    }
  }
  .leftIcon,.rightIcon{
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
  }
  .rightIcon{
    margin-left: 12px;
  }
`