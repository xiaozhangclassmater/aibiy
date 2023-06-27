import RoomGroup from '@/components/RoomGroup'
import { isEmpty } from '@/utils'
import { memo } from 'react'
import { HomeContentWapper } from './style'
interface HomeContentProps {
  goodPriceInfo : goodPriceResponse
}
const HomeContent = memo(( { goodPriceInfo } : HomeContentProps ) => {
  return (
    <HomeContentWapper className='HomeContent'>
      <div className='contnet-wapper'>
        { !isEmpty(goodPriceInfo) &&  <RoomGroup productInfo={goodPriceInfo} />}
      </div>
    </HomeContentWapper>
  )
})

export default HomeContent