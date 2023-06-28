import { memo } from 'react'
import AibiSkeleton from '../skeleton'
import { TabCardRGSkeletonWapper } from './style'

const TabCardRgSkeleton = memo(() => {
  return (
    <TabCardRGSkeletonWapper>
      <AibiSkeleton.TitleSkeleton style={{width : '300px'}}/>
      <AibiSkeleton.TitleSkeleton style={{width : '200px' , marginTop : '10px'}} size='small'/>
      <AibiSkeleton.TabCardSkeleton />
    <div className='sksleton-item-container'>
      {new Array(6).fill('').map((item , index) => <AibiSkeleton.RoomItemSkt key={index} style={{marginLeft : '-8px'}} imageStyle={{width : '318px' , height: '218px'}} />)}
    </div>
  </TabCardRGSkeletonWapper>
  )
})

export default TabCardRgSkeleton