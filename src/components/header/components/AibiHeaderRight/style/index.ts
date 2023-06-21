import styled from 'styled-components'

const AbiHeaderRightWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  .Feature-Menus{
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
export default AbiHeaderRightWrapper
