import RoomGroup from '@/components/RoomGroup'
import { memo } from 'react'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : baseRoomInfo
  higHscoreInfo : baseRoomInfo
}
const HomeContent = memo(( { goodPriceInfo , higHscoreInfo} : HomeContentProps ) => {
  return (
    <HomeContentWapper className='HomeContent'>
      <div className='contnet-wapper'>
        {/*佛山高性价比房源  */}
        <RoomGroup skeletonNum={10}  productInfo={goodPriceInfo} />
         {/*佛山高评分房源  */}
        <RoomGroup skeletonNum={10} productInfo={higHscoreInfo} />
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent