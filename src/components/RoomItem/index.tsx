import { memo } from 'react'
import { RoomItemWapper } from './style'
interface RoomItemProps {
  item : GoodPriceItem
}
const RoomItem = memo(( { item } :RoomItemProps) => {
  return (
    <RoomItemWapper>
      <div className='room-item'>
        <div className='cover'>
          <img src={item.picture_url} alt="" />
        </div>
        <div className='desc'>{item.verify_info.messages.join('.')}</div>
        <div className='product-name'>{item.name}</div>
        <div className='price'>{item.price_format}/晚上</div>
        <div className='evaluate'>
          <span className='mark'></span>
          <span className='commonCount'></span>
        </div>
      </div>
    </RoomItemWapper>
  )
})

export default RoomItem