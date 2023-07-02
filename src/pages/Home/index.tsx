
import { queryCityCategaryInfo, queryGoodPriceInfo, queryHighscoreInfo, queryHotRecommendInfo } from '@/api/Home';
import { useRequest } from '@/hooks/modules/ahooks';
import { saveGoodPriceAction, saveHigHscoreAction } from '@/store/modules/Home';
import { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './components/HomeBanner';
import HomeContent from './components/HomeContent';
const Home = memo(() => {
  const dispatch = useDispatch()
  const {goodPriceInfo , higHscoreInfo  } = useSelector((state : storeStateType) => state.HomeModule , shallowEqual)
  const [count , setCount] = useState(0)
  const { data : hotRecommendDesc  } = useRequest<HotRecemmendDestType>(queryHotRecommendInfo,{argument:{ url : '/api/home/hotrecommenddest' } })
  const { data:cityCatagaryInfo } = useRequest<cityCataGaryType>(queryCityCategaryInfo , {argument : { url : 'api/home/longfor'}})
  const queryHomePageData = () => {
    disPatchGoodPriceInfo() 
    dispatchHighscoreInfo()
    // dispatchHotRecommend()
  }
  /**
   * @description disPatchGoodPriceInfo 分发查询 高性价比的房源数据
   */
  const disPatchGoodPriceInfo = async() => {
    try {
      const { data } = await queryGoodPriceInfo('/api/home/goodprice')
        dispatch(saveGoodPriceAction(data))
    } catch (error) {}
  }
  /**
   * @params 
   * @description 高分房源接口数据查询
   */
  const dispatchHighscoreInfo = async () => {
    try {
      const { data } = await queryHighscoreInfo('/api/home/highscore')
      dispatch(saveHigHscoreAction(data))
    } catch (error) {}
  }

  
  useEffect(() => {
    queryHomePageData()
  } , [dispatch])
  return (
    <div className='HomeRoot'>
      <HomeBanner/>
      <HomeContent 
        cityCatagaryInfo ={cityCatagaryInfo as cityCataGaryType}
        goodPriceInfo={goodPriceInfo} 
        higHscoreInfo={higHscoreInfo} 
        hotRecemmendDest={hotRecommendDesc as HotSourceCityType} 
      />
    </div>
  )
})

export default Home