import { queryHotSourceRegionInfo } from '@/api/Home'
import RoomGroup from '@/components/RoomGroup'
import SectionCategaryRg from '@/components/SectionCategaryRG'
import TabCardRoomGroup from '@/components/TabCardRoomGroup'
import { saveHotSourceRegion } from '@/store/modules/Home'
import { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : baseRoomInfo
  higHscoreInfo : baseRoomInfo
  cityCatagaryInfo : cityCataGaryType,
  hotRecemmendDest : HotRecemmendDestType
}
const HomeContent = memo(( { goodPriceInfo , higHscoreInfo  , hotRecemmendDest , cityCatagaryInfo} : HomeContentProps ) => {
  const { hotSourceRegion } = useSelector( ( state : storeStateType ) => state.HomeModule, shallowEqual)
  console.log(hotSourceRegion);
  
  const dispatch = useDispatch()
    /**
   * @description 热门目的地数据分发和查询
   */
    const dispatchHotSourceRegion = async () => {
      console.log(hotSourceRegion);
      // if(isEmpty(hotRecemmendDest)) return
      try {
        const { data } = await queryHotSourceRegionInfo('/api/home/discount')
          dispatch(saveHotSourceRegion(data))
      } catch (error) {}
    }
    const getHotSourceRegionInfo = useCallback(() => dispatchHotSourceRegion() , [hotSourceRegion])
    
  return (
    <HomeContentWapper className='HomeContent'>
      <div className='contnet-wapper'>
       
        {/* <TabCardRoomGroup hotCityProductInfo={hotRecemmendDest} /> */}
        {/* 佛山高性价比房源  */}
        <RoomGroup skeletonNum={10}  productInfo={goodPriceInfo} />
         {/* 佛山高评分房源  */}
        <RoomGroup skeletonNum={10} productInfo={higHscoreInfo} />
        
        <TabCardRoomGroup hotCityProductInfo={hotSourceRegion} queryInfo={getHotSourceRegionInfo} />
        
        <SectionCategaryRg catagaryInfo={cityCatagaryInfo || {}} />
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent