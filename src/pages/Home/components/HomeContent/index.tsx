import RoomGroup from '@/components/RoomGroup'
import TabCardRoomGroup from '@/components/TabCardRoomGroup'
import { memo } from 'react'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : baseRoomInfo
  higHscoreInfo : baseRoomInfo
  hotCityProductInfo : HotSourceCityType
}
const HomeContent = memo(( { goodPriceInfo , higHscoreInfo , hotCityProductInfo} : HomeContentProps ) => {
  return (
    <HomeContentWapper className='HomeContent'>
      <div className='contnet-wapper'>
        <TabCardRoomGroup hotCityProductInfo={hotCityProductInfo}  />
        {/*佛山高性价比房源  */}
        <RoomGroup skeletonNum={10}  productInfo={goodPriceInfo} />
         {/*佛山高评分房源  */}
        <RoomGroup skeletonNum={10} productInfo={higHscoreInfo} />
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent