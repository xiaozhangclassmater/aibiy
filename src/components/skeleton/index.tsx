import React from 'react';
import CardSkeleton from './modules/CardSkeleton';
import RoomItemSkt from './modules/RoomItemSkeleton';
import TabCardSkeleton from './modules/TabCardSkeleton';
import TitleSkeleton from './modules/TitleSkeleton';

export type size = 'small' | 'large' | 'default' | undefined

interface AibiSkeletonProps{
  active ?: boolean
}
type CompoundedComponent = {
  RoomItemSkt: typeof RoomItemSkt;
  TabCardSkeleton : typeof TabCardSkeleton;
  TitleSkeleton : typeof TitleSkeleton,
  CardSkeleton : typeof CardSkeleton
  
};
const AibiSkeleton: React.FC<AibiSkeletonProps> & CompoundedComponent  = () => {
  return (
    <></>
  )
}

AibiSkeleton.RoomItemSkt = RoomItemSkt
AibiSkeleton.TabCardSkeleton = TabCardSkeleton
AibiSkeleton.TitleSkeleton = TitleSkeleton
AibiSkeleton.CardSkeleton = CardSkeleton


export default AibiSkeleton