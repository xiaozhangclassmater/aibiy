import styled from 'styled-components'

const AbiHeaderRightWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  .Feature-Menus{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 42px;
   
    .icon-global{
      display: flex;
      width: 40px;
      height: 42px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      &:hover{
        background-color: #f7f7f7;
      }
      .icon-global-svg{
        width: 16px !important;
        height: 16px !important;
      }
    }
    .personal-feature-menus{
      display: flex;
      width: 77px;
      height: 42px;
      background-color: #fff;
      border-radius: 30px;
      margin-left: 5px;
      align-items: center;
      cursor: ${props => props.theme.SmallHand};
      border: 1px solid ${props => props.theme.themeBorder};
      &:hover{
        box-shadow: var(--e-swdx-p);
        transition: all .5s;
      }
      .menus-svg{
        margin-left: 10px;
        margin-right: 15px;
      }
      .Personal-Svg{
        width: 30px;
        height: 30px;
      }
    }
  }
`
const MenusWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 50px;
  width: 234px;
  height: 201px;
  background-color: #fff;
  border-radius: 15px;
  user-select: none;
  z-index: 99;
  box-shadow : var(--e-swdx-p);
  .menus-contianer{
    width: 100%;
    height: 100%;
    padding: 8px 0px;
    
    li {
      height: 40px;
      line-height: 35px;
      padding-left: 10px;
      font-size: 14px;
      &:hover{
        background-color: #f7f7f7;
      }
      &:first-child{
        color: ${props => props.theme.textColor.primaryColor};
        font-weight: 600;
      }
    }
    .line {
      height: 1px;
      width: 100%;
      margin: 5px auto;
      background-color:  ${props => props.theme.themeBorder}; ;
    }
  }
`


export {
  AbiHeaderRightWrapper,
  MenusWrapper
}

