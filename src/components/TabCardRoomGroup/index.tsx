import { isEmpty } from '@/utils'
import { memo, useMemo, useState } from 'react'
import RoomItem from '../RoomItem'
import SectionTitle from '../SectionTitle'
import TabCard from '../TabCard'
import TabCardRgSkeleton from './TabCardRgSkeleton'
import { TabCardRoomGroupWapper } from './style'

interface TabCardRoomGroupProps {
  hotCityProductInfo : HotSourceCityType,
  proportion? : string | number
}

const TabCardRoomGroup = memo(( { hotCityProductInfo  , proportion = '33.33%'} : TabCardRoomGroupProps) => {
  
  const [ products  , setProducts ] = useState<(RoomItem & newAddFiled)[]>()
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%') , [proportion])

  const getCityHousingResourceInfo = (cityName : string) => {
    setProducts(hotCityProductInfo.dest_list[cityName])
  }
  return (
    <TabCardRoomGroupWapper>
      {
        (!isEmpty(hotCityProductInfo)) && <div className='TabCard-RoomGroup-Wapper'>
        <SectionTitle title={hotCityProductInfo.title || '热门城市'} subTitle={hotCityProductInfo.subtitle || "美丽的城市，邻人向往"} />
        <TabCard tabList={hotCityProductInfo.dest_address || []} getProductInfo={getCityHousingResourceInfo}  />
        <div className='product-item-container'>
          {products?.length && products.map(item => <RoomItem proportion={computedProportion} item={item} key={item.id}/>)}
        </div>
      </div>
      }
      {
        (
        isEmpty(hotCityProductInfo) && <TabCardRgSkeleton/>)
      }
    </TabCardRoomGroupWapper>
  )
})

export default TabCardRoomGroup