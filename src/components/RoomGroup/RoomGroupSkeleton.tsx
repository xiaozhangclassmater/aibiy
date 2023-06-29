import { memo } from 'react'
import AibiSkeleton from '../skeleton'
import { RoomGroupSkeletonWapper } from './style'

const RoomGroupSkeleton = memo(() => {
  return (
    <RoomGroupSkeletonWapper>
      <AibiSkeleton.TitleSkeleton size={'large'} style={{marginTop : '10px',width : '200px'}}/>
      <div className='RoomItem-skeleton-container'>
      {new Array(10).fill('').map((item , index) => <AibiSkeleton.RoomItemSkt active key={index}/>)}
      </div>
    </RoomGroupSkeletonWapper>
  )
})

export default RoomGroupSkeleton