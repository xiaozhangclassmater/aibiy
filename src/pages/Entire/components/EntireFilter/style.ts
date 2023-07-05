import { styled } from "styled-components";
export const EntireFilterWapper = styled.div`
  display: flex;
  padding: 10px 15px;
  box-sizing: border-box;
  align-items: center;
  .filter-btn-item{
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 4px;
    border-radius: 5px;
    cursor: ${props => props.theme.SmallHand};
    border: 1px solid ${props => props.theme.themeBorder};
  }
    .active-item {
      background-color: ${props => props.theme.secondColor};
      color: #fff;
    }
`