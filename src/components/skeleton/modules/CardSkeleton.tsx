import { Skeleton } from 'antd'
import { memo } from 'react'
import { CardSkeletonWapper } from '../style'

interface CardSkeletonProps {
  width : string
  style? : React.CSSProperties
}

const CardSkeleton = memo(({ style , width = '20%'} : CardSkeletonProps) => {
  return (
   <CardSkeletonWapper width={width} >
     <Skeleton.Image style={style}/>
   </CardSkeletonWapper>
  )
})

export default CardSkeleton