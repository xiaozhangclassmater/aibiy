
import { queryGoodPriceInfo } from '@/api/Home';
import { saveGoodPriceAction } from '@/store/modules/Home';
import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './components/HomeBanner';
import HomeContent from './components/HomeContent';
const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo } = useSelector((state : storeStateType) => state.HomeModule , shallowEqual)
 
  const queryHomePageData = () => {
    disPatchGoodPriceInfo() 
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
  useEffect(() => {
    queryHomePageData()
  } , [dispatch])
  return (
    <div className='HomeRoot'>
      <HomeBanner/>
      
      <HomeContent 
        goodPriceInfo={goodPriceInfo} 
      />
    </div>
  )
})

export default Home