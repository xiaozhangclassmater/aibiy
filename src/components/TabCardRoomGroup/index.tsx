import { useLazyLoad } from '@/hooks/modules/useLazyLoad'
import { ReactComponent as RightSvg } from '@/icons/svg/arrow-right.svg'
import { isEmpty } from '@/utils'
import { memo, useCallback, useMemo, useState } from 'react'
import RoomItem from '../RoomItem'
import SectionFooter from '../SectionFooter'
import SectionTitle from '../SectionTitle'
import TabCard from '../TabCard'
import TabCardRgSkeleton from './TabCardRgSkeleton'
import { TabCardRoomGroupWapper } from './style'

interface TabCardRoomGroupProps {
  hotCityProductInfo : HotSourceCityType,
  proportion? : string | number,
  queryInfo : () => void
}

const TabCardRoomGroup = memo(( { hotCityProductInfo  , proportion = '33.33%' , queryInfo} : TabCardRoomGroupProps) => {
  const [ products  , setProducts ] = useState<(RoomItem & newAddFiled)[]>([])
  const [ maxRenderCount , setMaxRenderCount] = useState(6)
  const [ currentCityName , setCurrentCityName ] = useState('')
  const { el : TabCardRef  } = useLazyLoad(queryInfo)
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%') , [proportion])
  const cacheCurrentCityName = useMemo(() => currentCityName , [currentCityName])
  const getCityHousingResourceInfo = (cityName : string) => {
    setCurrentCityName(cityName)
    setProducts(hotCityProductInfo.dest_list[cityName])
  }
  const seeMore = useCallback((isPackUp : boolean) => {
     
  } , [hotCityProductInfo])

  

    console.log(TabCardRef.current);
  // useEffect( () => {
  //   const callback = (entries:IntersectionObserverEntry[]) => {

  //     entries.forEach((entry:IntersectionObserverEntry) => {
  //       if (entry.isIntersecting) {
  //         // 元素进入可视区域
  //         console.log('Element is visible' , entry);
  //       } else {
  //         // 元素离开可视区域
  //         console.log('Element is not visible');
  //       }
  //     });
  //   };
  //   const options = {
  //     root: null, // 可视区域的根元素。null 表示整个视口
  //     rootMargin: '0px', // 可视区域的边缘留白
  //     threshold: 0, // 目标元素与可视区域的交叉比例
  //   };
  //   const observer = new IntersectionObserver(callback , options)
  //   if (TabCardRef.current) {
  //     observer.observe(TabCardRef.current); // 监听目标元素
  //   }

  //   return () => {
  //     observer.unobserve(TabCardRef.current!)
  //   }
  // } , [])

  return (
    <TabCardRoomGroupWapper ref={TabCardRef as any}>
      {
        (!isEmpty(hotCityProductInfo)) && <div className='TabCard-RoomGroup-Wapper'>
          <SectionTitle title={hotCityProductInfo.title || '热门城市'} subTitle={hotCityProductInfo.subtitle || "美丽的城市，邻人向往"} />
          <TabCard tabList={hotCityProductInfo.dest_address || []} getProductInfo={getCityHousingResourceInfo}  />
          <div className='product-item-container'>
            {products?.length && products.map(item => <RoomItem proportion={computedProportion} item={item} key={item.id}/>)}
          </div>
          {<SectionFooter cityName={cacheCurrentCityName} IconSvg={RightSvg} seeMore={seeMore}  />}
        </div>
      }
      {(isEmpty(hotCityProductInfo) && <TabCardRgSkeleton/>)}
    </TabCardRoomGroupWapper>
  )
})

export default TabCardRoomGroup