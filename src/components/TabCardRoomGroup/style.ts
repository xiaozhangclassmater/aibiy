import { styled } from "styled-components";

// interface TabCardRoomGroupWapper

const TabCardRoomGroupWapper = styled.div`
  .TabCard-RoomGroup-Wapper{
    width: 100%;
    height: 100%;
    .product-item-container{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;
    }
  }
  .TabCardRGSkeleton{
    margin-top: 15px;
  }
`
const TabCardRGSkeletonWapper = styled.div`
  margin-top: 15px;
  .sksleton-item-container{
    display: flex;
    flex-wrap: wrap;
  }
`

export { TabCardRGSkeletonWapper, TabCardRoomGroupWapper };

