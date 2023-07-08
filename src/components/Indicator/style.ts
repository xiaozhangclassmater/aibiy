import { styled } from "styled-components";

export const IndiCatorWapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  position: absolute;
  bottom: 10px;
  height: 12px;
  left: 0;
  right: 0;
  margin: 0 auto;
   .visualArea-width{
    width: 100px;
    overflow: hidden;
   }
  .IndiCator-content {
    position: relative;
    display: flex;
    transition: transform 300ms ease;
  }
  .dot{
    flex-shrink: 0;
    width: 14.7%;
    bottom: 10px;
    z-index: 99;
    .point{
      display: block;
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 50%;
    }
    .active{
      width: 7px;
      height: 7px;
    }
  }
`