import { queryCityCategaryInfo, queryHighscoreInfo, queryHotRecommendInfo, queryHotSourceRegionInfo } from '@/api/Home'
import RoomGroup from '@/components/RoomGroup'
import SectionCategaryRg from '@/components/SectionCategaryRG'
import TabCardRoomGroup from '@/components/TabCardRoomGroup'
import { useRequest } from '@/hooks'
import { memo, useCallback, useMemo } from 'react'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : baseRoomInfo
}
const HomeContent = memo(( { goodPriceInfo } : HomeContentProps ) => {
  const { data : hotSourceRegion ,  run:hotSourceRegionRun } = useRequest<HotSourceCityType>(queryHotSourceRegionInfo , { argument : { url : '/api/home/discount' } , manual : true})

  const { data : higHscoreInfo , run: higHscoreInfoRun} = useRequest<baseRoomInfo>(queryHighscoreInfo , { argument : {url : '/api/home/highscore'} , manual : true})

  const { data : hotRecommendDesc , run :hotRecommendDescRun  } = useRequest<HotRecemmendDestType>(queryHotRecommendInfo,{argument:{ url : '/api/home/hotrecommenddest' } , manual : true})
  
  const { data : cityCategaryInfo , run : cityCategaryInfoRun } = useRequest<cityCataGaryType>(queryCityCategaryInfo, {argument : { url :'/api/home/longfor'} , manual :true})

  const cacheHotSourceRegion = useMemo(() => hotSourceRegion as HotSourceCityType, [hotSourceRegion])

  const cacheHigHscoreInfo = useMemo(() => higHscoreInfo as baseRoomInfo , [higHscoreInfo])

  const cacheHotRecommendDesc = useMemo(() => hotRecommendDesc as HotRecemmendDestType , [hotRecommendDesc])

  const cacheCityCategaryInfo = useMemo(() => cityCategaryInfo as cityCataGaryType , [cityCategaryInfo]) 
  
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
        <RoomGroup skeletonNum={10} productInfo={cacheHigHscoreInfo} requestFn={getHigHscoreInfo}  />
        
        <TabCardRoomGroup hotCityProductInfo={cacheHotRecommendDesc} requestFn={getHotRecommendDescInfo} />
        
        <TabCardRoomGroup hotCityProductInfo={cacheHotSourceRegion} requestFn={getHotSourceRegionInfo} />

        <SectionCategaryRg catagaryInfo={cacheCityCategaryInfo} requestFn={getCityCategaryInfo}  />
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent