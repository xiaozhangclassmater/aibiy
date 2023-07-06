import { useLazyLoad } from '@/hooks/modules/useLazyLoad'
import { ReactComponent as RightSvg } from '@/icons/svg/arrow-right.svg'
import { isEmpty } from '@/utils'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Rooms from '../Rooms'
import SectionFooter from '../SectionFooter'
import SectionTitle from '../SectionTitle'
import TabCard from '../TabCard'
import TabCardRgSkeleton from './TabCardRgSkeleton'
import { TabCardRoomGroupWapper } from './style'
interface TabCardRoomGroupProps {
  hotCityProductInfo : HotSourceCityType,
  proportion? : string | number,
  loading? : boolean
  showFooter? : boolean
  requestFn? : () => void
}

const TabCardRoomGroup = memo(({ 
  hotCityProductInfo , 
  proportion = '33.33%', 
  requestFn,
  showFooter = true,
  loading
}:TabCardRoomGroupProps) => {  
  const [ products  , setProducts ] = useState<(RoomItem & newAddFiled)[]>([])
  const [ currentCityName , setCurrentCityName ] = useState('')
  const animationRef = useRef(null)
  const { elRef :TabCardRef  } = useLazyLoad(requestFn ? requestFn : () => {})
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%') , [proportion])
  const cacheCurrentCityName = useMemo(() => currentCityName , [currentCityName])
  const getCityHousingResourceInfo = (cityName : string) => {
    setCurrentCityName(cityName)
    setProducts(hotCityProductInfo?.dest_list[cityName])
  }
  const seeMore = useCallback(() => {} , [hotCityProductInfo])
  
  return (
    <TabCardRoomGroupWapper ref={TabCardRef}>
      {
        <div className='TabCard-RoomGroup-Wapper'>
          <SectionTitle title={hotCityProductInfo?.title} subTitle={hotCityProductInfo?.subtitle} />
          {!isEmpty(hotCityProductInfo)  && <TabCard tabList={hotCityProductInfo?.dest_address} getProductInfo={getCityHousingResourceInfo}  />}
          <div className='product-item-container fead'>
            <CSSTransition in={loading} timeout={300} classNames={'fead'}>
              <Rooms list={products} ref={animationRef} proportion={computedProportion} maxRoomItemCount={6} />
            </CSSTransition>
          </div>
          {(showFooter && (!isEmpty(hotCityProductInfo))) &&  <SectionFooter cityName={cacheCurrentCityName} IconSvg={RightSvg} seeMore={seeMore}  />}
        </div>
      }
      {(isEmpty(hotCityProductInfo) && <TabCardRgSkeleton/>)}
    </TabCardRoomGroupWapper>
  )
})

export default TabCardRoomGroup