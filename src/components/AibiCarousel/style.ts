import { styled } from "styled-components";

export const AibiCarouselWapper = styled.div`
  position: relative;
  
  .carousel{
    .carousel-item{
      .carousel-confianer{
        margin: 0;
        height: 230px;
        color: #fff;
        line-height: 230px;
        text-align: center;
        background: transparent;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
       
      }
    }
  }
  .image-poiter{
    display: flex;
    width: 40%;
    overflow: scroll;
    margin: 0 auto;
    z-index: 99;
    &::-webkit-scrollbar{
      display: none;
      width: 0px;
    }
    li{
      width: 7px !important;
      flex-shrink: 0;
      height: 7px;
      line-height: 10px;
      border-radius: 50% !important;
      background-color: rgba(255,255,255,.5);
      button {
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .mask{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .left,.right {
      position: absolute;
    }
    .left {

      left: 10px;
    }
    .right{
      right: 10px;
    }
    &:hover{
      /* transition: all .5s; */
      /* background-image: linear-gradient(to right, rgba(0,0,0,.4),rgba(255,255,255,.0), rgba(0,0,0,.4)); */
    }
  }
`