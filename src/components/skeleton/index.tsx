import React from 'react';
import RoomItemSkt from './RoomItemSkeleton';
export type size = 'small' | 'large' | 'default' | undefined

interface AibiSkeletonProps{
  active ?: boolean
}
type CompoundedComponent = {
  RoomItemSkt: typeof RoomItemSkt;
};
const AibiSkeleton: React.FC<AibiSkeletonProps> & CompoundedComponent  = () => {
  return (
    <div>Skeleton</div>
  )
}

AibiSkeleton.RoomItemSkt = RoomItemSkt



export default AibiSkeleton