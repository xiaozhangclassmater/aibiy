import { queryCityCategaryInfo, queryHighscoreInfo, queryHotRecommendInfo, queryHotSourceRegionInfo, queryHousingSourcePlusInfo } from '@/api/Home'
import RoomGroup from '@/components/RoomGroup'
import SectionCategaryRg from '@/components/SectionCategaryRG'
import SectionHousePlus from '@/components/SectionHousePlus'
import TabCardRoomGroup from '@/components/TabCardRoomGroup'
import { useRequest } from '@/hooks'
import { memo, useCallback } from 'react'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : baseRoomInfo
}
const HomeContent = memo(( { goodPriceInfo } : HomeContentProps ) => {
  const { data : hotSourceRegion ,  run:hotSourceRegionRun } = useRequest<HotSourceCityType , typeof queryHotSourceRegionInfo>(queryHotSourceRegionInfo , { 
    config : { url : '/api/home/discount' },
    manual : true
  })
  const { data : higHscoreInfo , run: higHscoreInfoRun} = useRequest<baseRoomInfo>(queryHighscoreInfo , { 
    config : {url : '/api/home/highscore'} , 
    manual : true
  })
  const { data : hotRecommendDesc , run :hotRecommendDescRun  } = useRequest<HotRecemmendDestType>(queryHotRecommendInfo,{ 
    config:{ url : '/api/home/hotrecommenddest' } , 
    manual : true
  })
  const { data : cityCategaryInfo , run : cityCategaryInfoRun } = useRequest<cityCataGaryType>(queryCityCategaryInfo, {
    config : { url :'/api/home/longfor'} , 
    manual :true
  })
  const { data:houSingSourcePlusInfo  } = useRequest(queryHousingSourcePlusInfo , { config : { url : 'api/home/plus'} })

  const getHotSourceRegionInfo = useCallback(() => hotSourceRegionRun() , [hotSourceRegion])
  const getHigHscoreInfo = useCallback(() => higHscoreInfoRun() , [higHscoreInfo])
  const getHotRecommendDescInfo= useCallback(() => hotRecommendDescRun() , [hotRecommendDesc])
  const getCityCategaryInfo= useCallback(() => cityCategaryInfoRun() , [cityCategaryInfo])
    
  return (
    <HomeContentWapper className='HomeContent'>
      <div className='contnet-wapper'>
       
        {/* 佛山高性价比房源  */}
        <RoomGroup skeletonNum={10}  productInfo={goodPriceInfo} />
         {/* 佛山高评分房源  */}
        <RoomGroup skeletonNum={10} productInfo={higHscoreInfo as baseRoomInfo} requestFn={getHigHscoreInfo}  />
        
        <SectionCategaryRg catagaryInfo={cityCategaryInfo as cityCataGaryType } requestFn={getCityCategaryInfo}  />
        
        <TabCardRoomGroup hotCityProductInfo={hotRecommendDesc as HotRecemmendDestType} requestFn={getHotRecommendDescInfo} />
        
        <TabCardRoomGroup hotCityProductInfo={hotSourceRegion as HotSourceCityType} requestFn={getHotSourceRegionInfo} />
        
        <SectionHousePlus info={houSingSourcePlusInfo as baseRoomInfo<newAddFiled>} />

       
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent