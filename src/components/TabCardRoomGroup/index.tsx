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
  requestFn? : () => void
}

const TabCardRoomGroup = memo(( { hotCityProductInfo  , proportion = '33.33%' , requestFn} : TabCardRoomGroupProps) => {
  
  const [ products  , setProducts ] = useState<(RoomItem & newAddFiled)[]>([])
  const [ currentCityName , setCurrentCityName ] = useState('')
  const { Element :TabCardRef  } = useLazyLoad(requestFn ? requestFn : () => {})
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%') , [proportion])
  const cacheCurrentCityName = useMemo(() => currentCityName , [currentCityName])
  const getCityHousingResourceInfo = (cityName : string) => {
    setCurrentCityName(cityName)
    setProducts(hotCityProductInfo.dest_list[cityName])
  }
  const seeMore = useCallback(() => {
    
  } , [hotCityProductInfo])
  
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