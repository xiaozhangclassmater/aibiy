
import { queryGoodPriceInfo, queryHighscoreInfo, queryHotRecommendInfo, queryHotSourceRegionInfo } from '@/api/Home';
import { useRequest } from '@/hooks/modules/ahooks';
import { saveGoodPriceAction, saveHigHscoreAction, saveHotRecommendDest, saveHotSourceRegion } from '@/store/modules/Home';
import { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './components/HomeBanner';
import HomeContent from './components/HomeContent';
const Home = memo(() => {
  console.log('HomeRender');
  
  const dispatch = useDispatch()
  const {goodPriceInfo , higHscoreInfo , hotSourceRegion , hotRecommendDesc } = useSelector((state : storeStateType) => state.HomeModule , shallowEqual)
  const [count , setCount] = useState(0)
  const queryHomePageData = () => {
    disPatchGoodPriceInfo() 
    dispatchHighscoreInfo()
    dispatchHotSourceRegion()
    dispatchHotRecommend()
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
  /**
   * @description 热门目的地数据分发和查询
   */
  const dispatchHotSourceRegion = async () => {
    try {
      const { data } = await queryHotSourceRegionInfo('/api/home/discount')
        dispatch(saveHotSourceRegion(data))
    } catch (error) {}
  }

  const dispatchHotRecommend = async () =>  {
    try {
      const { data } = await queryHotRecommendInfo('/api/home/hotrecommenddest')
      dispatch(saveHotRecommendDest(data))
    } catch (error) {}
  }
  const { data , loading } = useRequest<HotRecemmendDestType>(queryHotRecommendInfo,{argument:{ url : '/api/home/hotrecommenddest' } })
  console.log("响应结果" ,data?._id ,loading);
  
  useEffect(() => {
    queryHomePageData()
  } , [dispatch])
  return (
    <div className='HomeRoot'>
      <button onClick={() => setCount(count+ 1)}>1111</button>
      <HomeBanner/>
      <HomeContent goodPriceInfo={goodPriceInfo} higHscoreInfo={higHscoreInfo} hotCityProductInfo={hotSourceRegion} hotRecemmendDest={hotRecommendDesc}  />
    </div>
  )
})

export default Home