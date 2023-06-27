
import { getGoodPriceInfo } from '@/api/Home';
import { goodPriceAction } from '@/store/modules/Home';
import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './components/HomeBanner';
import HomeContent from './components/HomeContent';
const Home = memo(() => {
  const dispatch = useDispatch()
  const goodPriceInfo = useSelector((state : storeStateType) => state.HomeModule.goodPriceInfo , shallowEqual)

  const queryHomePageData = async () => {
    disPatchGoodPriceInfo()
  }
  const disPatchGoodPriceInfo = async() => {
    try {
      const { data } = await getGoodPriceInfo('/api/home/goodprice')
      dispatch(goodPriceAction(data))
    } catch (error) {}
  }
  useEffect(() => {
    queryHomePageData()
  } , [dispatch])
  return (
    <div className='HomeRoot'>
      <HomeBanner/>
      <HomeContent goodPriceInfo={goodPriceInfo} />
    </div>
  )
})

export default Home