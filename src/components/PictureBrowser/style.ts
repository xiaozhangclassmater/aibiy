import { styled } from "styled-components";
interface PictureBrowserWapperProps {
  isRight?: boolean
}
export const PictureBrowserWapper = styled.div<PictureBrowserWapperProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #272727;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  .top {
    display: flex;
    justify-content: flex-end;
    height: 10%;
    width: 100%;
    svg{
      width: 40px;
      height: 40px;
    }
  }
  .center{
    display: flex;
    align-items: center;
    height: 70%;
    max-height: 105vh;  
    .left-icon,.right-icon{
      width: 80px;
    }
    .content{
      position: relative;
      width: 100%;
      max-width: 105vw;
      display: flex;
      justify-content: center;
      flex: 1;
      img{
        /* width: 50%;
        height: 50%; */
        user-select: none;
      }
      .pictrue-enter {
        transform: ${props => props.isRight ? `translateX(100%)` : 'translateX(-100%)'};
        opacity: 0;
      }
      .pictrue-enter-active{
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }
      .pictrue-exit{
        opacity: 1;
      }
      .pictrue-exit-active{
        opacity: 0;
        transition: opacity 200ms ease;
      }
    }
    svg{
      width: 80px;
      height: 80px;
    }
  }
  .bottom {
    height: 20%;
    width: 100%;
    .container{
      width : 50%;
      margin: 0 auto;
      .line-info{
        user-select : none;
        display : flex;
        height : 30px;
      }
    .scroll-images{
      position : relative;
      height : 100px;
      width : 100%;
      .IndiCator-wapper{
        width : 100%;
        height : 100%;
        bottom : 0;
        .IndiCator-content {
          height: 100%;
          .picture-item{
            position: relative;
            width : 20%;
            flex-shrink : 0;
            overflow : hidden;
            img{
              width : 100%;
              height :100%;
            }
            .mask{
              position : absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,.3);
            }
            .mask-active {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
    
}
`