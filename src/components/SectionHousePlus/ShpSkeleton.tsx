import { memo } from 'react'
import AibiSkeleton from '../skeleton'
import { ShpSkeletonWapper } from './style'

const ShpSkeleton = memo(() => {
  return (
    <ShpSkeletonWapper>
      <AibiSkeleton.TitleSkeleton/>
      <AibiSkeleton.TitleSkeleton style={{width : '150px'}} />
      <div className='shp-sksleton-wapper'>
          {(new Array(5).fill('').map(((item , index) =>{
            return <AibiSkeleton.RoomItemSkt style={{width : '20%'}} buttonWidths={[150 , 100 , 200]}  imageStyle={{width : '192px', height : '129px'}}  key={index}/>
          })))}
      </div>
    </ShpSkeletonWapper>
  )
})

export default ShpSkeleton