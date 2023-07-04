import { styled } from "styled-components";

interface ScrollViewWapperProps {
  displacementsize?: string
  flexshaking?: 0 | 1
}

const ScrollViewWapper = styled.div<ScrollViewWapperProps>`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  .leftIcon,.rightIcon{
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    flex-shrink: ${props => (props.flexshaking || 0)};
    min-width: 30px;
    border-radius: 50%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    z-index: 100;
    cursor: ${props => props.theme.SmallHand};
    box-shadow: var(--e-swdx-p);
  }
  .leftIcon{
    left: -20px;
  }
  .rightIcon{
    right: -20px;
  }
  .scroll-content-hidden {
    overflow: hidden;
    .scroll-content{
      position: relative;
      display: flex;
      align-items: center;
      margin: ${props => props.displacementsize};
      transition: transform .2s ease;
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
        transition: all .3s;
        user-select: none;
        cursor: ${props => props.theme.SmallHand};
        &:hover{
          box-shadow: var(--e-swdx-p);
        }
        &:first-child{
          margin-left: 0px;
        }
      }
  }
  }
`

export { ScrollViewWapper };

