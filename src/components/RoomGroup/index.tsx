import RoomItem from '@/components/RoomItem'
import { memo } from 'react'
import { RoomGroupWapper } from './style'
interface RoomGroupProps {
  productInfo : goodPriceResponse
}
const RoomGroup = memo(( { productInfo } : RoomGroupProps ) => {
  return (
    <RoomGroupWapper>
      <div className='room-group-wapper'>
        <p className='title'>{productInfo.title}</p>
       {productInfo.subTitle &&  <div className='description'>{productInfo.subTitle}</div>}
       <div className='product-item-container'>
        {productInfo.list.map(item => <RoomItem item={item} key={item.id}/>)}
       </div>
      </div>
    </RoomGroupWapper>
  )
})

export default RoomGroup