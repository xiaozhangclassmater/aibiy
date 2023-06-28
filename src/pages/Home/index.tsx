
import { queryGoodPriceInfo, queryHighscoreInfo, queryHotSourceRegionInfo } from '@/api/Home';
import { goodPriceAction, higHscoreAction } from '@/store/modules/Home';
import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './components/HomeBanner';
import HomeContent from './components/HomeContent';
const Home = memo(() => {
  const dispatch = useDispatch()
  const {goodPriceInfo , higHscoreInfo } = useSelector((state : storeStateType) => state.HomeModule , shallowEqual)

  const queryHomePageData = async () => {
    disPatchGoodPriceInfo() 
    dispatchHighscoreInfo()
    dispatchHotSourceRegion()
  }
  /**
   * 
   */
  const disPatchGoodPriceInfo = async() => {
    try {
      const { data } = await queryGoodPriceInfo('/api/home/goodprice')
      dispatch(goodPriceAction(data))
    } catch (error) {}
  }
  /**
   * @params 
   * @description 高分房源接口数据查询
   */
  const dispatchHighscoreInfo = async () => {
    try {
      const { data } = await queryHighscoreInfo('/api/home/highscore')
      dispatch(higHscoreAction(data))
    } catch (error) {}
  }
  /**
   * @description 热门目的地数据分发和查询
   */
  const dispatchHotSourceRegion = async () => {
    try {
      const { data } = await queryHotSourceRegionInfo('/api/home/discount')
      console.log(data);
      
    } catch (error) {
      
    }
  }
  useEffect(() => {
    queryHomePageData()
  } , [dispatch])
  return (
    <div className='HomeRoot'>
      <HomeBanner/>
      <HomeContent goodPriceInfo={goodPriceInfo} higHscoreInfo={higHscoreInfo} />
    </div>
  )
})

export default Home