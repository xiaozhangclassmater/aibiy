import { styled } from "styled-components";

export const DetailPictureWapper = styled.div`
  width: 100%;
  height: 100%;
  .children {
    display: flex;
    height: 580px;
    .picture-left,.picture-right{
      position: relative;
      width: 50%;
    }
    img{
      cursor: pointer;
    }

    .picture-left{
      overflow: hidden;
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &:hover img {
        transform: scale(1.1);
        transition: all .4s;
      }
      &:hover .mask{
        transition: all .4s;
        cursor: pointer;
        background-color: rgba(0,0,0,.3);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .picture-right{
      display: flex;
      flex-wrap: wrap;
      .right-item{
        position: relative;
        width: 50%;
        height: 290px;
        border: 1px solid #000;
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;
        .mask{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        img{
          width: 100%;
          height: 100%;
        }
        &:hover .mask{
        transition: all .4s;
        cursor: pointer;
        background-color: rgba(0,0,0,.3);
      }
      &:hover img {
        transform: scale(1.1);
        transition: all .4s;
      }
     
    }
    }

  }
  
`