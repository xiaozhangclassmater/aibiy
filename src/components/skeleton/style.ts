import { styled } from "styled-components";

export const RoomItemSkeltonWapper = styled.div`
  padding: 8px;
  .ant-skeleton{
    display: block;
  }
  .skeleton-button{
    margin: 2.5px auto;
  }
`
export const TabCardSkeletonWapper = styled.div`
  display: flex;
  margin-top: 15px;
  .ant-skeleton{
    margin: 0 5px;
    &:first-child{
      margin-left: 0;
    }
  }

`

interface CardSkeletonWapperProps {
  width?: string
}

export const CardSkeletonWapper = styled.div<CardSkeletonWapperProps>`
  width: ${props => props.width};
  height: 250px;
  margin-left: 16px;
  &:first-child{
    margin-left: 0;
  }
  .ant-skeleton{
    height: 100%;
  }
`