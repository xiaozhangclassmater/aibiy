import { Rate } from 'antd'
import { memo, useMemo } from 'react'
import { RoomItemWapper } from './style'
interface RoomItemProps {
  item : RoomItem,
  proportion : string | number,
  flexshaking? : 0 | 1
}
const RoomItem = memo(( { item , proportion } :RoomItemProps) => {
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%') , [proportion])
  return (
    <RoomItemWapper 
      verify_color={(item.verify_info.text_color || '#ebebeb')} 
      content_color={item?.bottom_info?.content_color || '#000'}
      proportion={computedProportion}
      className='RoomItemWapper'
      >
      <div className='room-item'>
        <div className='cover'>
          <img src={item.picture_url} alt="" />
        </div>
        <div className='desc'>{item.verify_info.messages.join('.')}</div>
        <div className='product-name'>{item.name}</div>
        <div className='price'>{item.price_format}<span> / 晚</span></div>
        <div className='evaluate'>
          <span className='mark'>
            <Rate disabled value={item.reviews_count}  style={{ fontSize: 10 }} />
          </span>
          <span className='commonCount' style={{fontSize : item?.bottom_info?.font_size}}>{item.reviews_count} {item?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemWapper>
  )
})

export default RoomItem