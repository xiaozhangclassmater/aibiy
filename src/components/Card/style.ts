import { styled } from "styled-components";

export const CardWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20%;
  padding: 8px;
  flex-shrink: 0;
  user-select: none;
  box-sizing: border-box;
  cursor: pointer;
  &:hover .card-image img{
    transform: scale(1.1);
    transition: transform .3s;
  }

  &:first-child{
    margin-left: 0;
  }
  .card-image{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
   
    img{
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image : linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6) );
  }
  }
  .name {
      position: absolute;
      bottom: 60px;
      z-index: 99;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
  }
  .direction{
      position: absolute;
      bottom: 40px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
  }
 

`