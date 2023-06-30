import { memo } from 'react'
import AibiSkeleton from '../skeleton'
import { RoomGroupSkeletonWapper } from './style'
interface RoomGroupSkeletonProps {
  skeletonNum : number
}
const RoomGroupSkeleton = memo(({skeletonNum} : RoomGroupSkeletonProps) => {
  return (
    <RoomGroupSkeletonWapper>
      <AibiSkeleton.TitleSkeleton size={'large'} style={{marginTop : '10px',width : '200px'}}/>
      <div className='RoomItem-skeleton-container'>
      {new Array<string>(skeletonNum).fill('').map((_item , index) => <AibiSkeleton.RoomItemSkt active key={index}/>)}
      </div>
    </RoomGroupSkeletonWapper>
  )
})

export default RoomGroupSkeleton