import React from 'react';
import RoomItemSkt from './RoomItemSkeleton';
import TabCardSkeleton from './TabCardSkeleton';
import TitleSkeleton from './TitleSkeleton';
export type size = 'small' | 'large' | 'default' | undefined

interface AibiSkeletonProps{
  active ?: boolean
}
type CompoundedComponent = {
  RoomItemSkt: typeof RoomItemSkt;
  TabCardSkeleton : typeof TabCardSkeleton;
  TitleSkeleton : typeof TitleSkeleton
  
};
const AibiSkeleton: React.FC<AibiSkeletonProps> & CompoundedComponent  = () => {
  return (
    <></>
  )
}

AibiSkeleton.RoomItemSkt = RoomItemSkt
AibiSkeleton.TabCardSkeleton = TabCardSkeleton
AibiSkeleton.TitleSkeleton = TitleSkeleton


export default AibiSkeleton