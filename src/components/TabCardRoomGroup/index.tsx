import { isEmpty } from '@/utils'
import { memo, useMemo, useState } from 'react'
import RoomItem from '../RoomItem'
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
          {hotCityProductInfo.title ? <p className='title'>{hotCityProductInfo.title}</p> : <p>热门城市</p>}
          {hotCityProductInfo.subtitle ? <div className='desc'>{hotCityProductInfo.subtitle}</div> : <div>美丽的城市，邻人向往</div>}
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