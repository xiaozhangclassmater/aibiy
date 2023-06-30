import { styled } from "styled-components";

export const RoomGroupWapper = styled.div`
  .room-group-wapper{
    width: 100%;
    height: 100%;
    .product-item-container{
      display: flex;
      flex-wrap: wrap;  
      margin: 0 -8px;
      transition: max-height 0.3s ease-in-out;
    }
  }
`

export const RoomGroupSkeletonWapper = styled.div`
  .RoomItem-skeleton-container{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

`