import { saveDetailInfo } from '@/store/modules/Detail'
import { Rate } from 'antd'
import classNames from 'classnames'
import { memo, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import AibiCarousel from '../AibiCarousel'
import { RoomItemWapper } from './style'
interface RoomItemProps {
  item: RoomItem & newAddFiled,
  proportion: string | number,
  flexshaking?: 0 | 1,
  showSwiper?: boolean
}
const RoomItem = memo(({
  item,
  proportion,
  showSwiper = false
}: RoomItemProps
) => {
  const computedProportion = useMemo(() => (typeof proportion === 'string' ? proportion : proportion + '%'), [proportion])
  const [showGlisten, setShowGlisten] = useState(true)
  const router = useNavigate()
  const dispatch = useDispatch()
  setTimeout(() => {
    setShowGlisten(false)
  }, 1000);
  const toDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    if (!showSwiper) return
    dispatch(saveDetailInfo(item))
    router('/detail')
  }
  return (
    <RoomItemWapper
      verify_color={(item.verify_info.text_color || '#ebebeb')}
      content_color={item?.bottom_info?.content_color || '#000'}
      proportion={computedProportion}
      className='RoomItemWapper'
      onClick={(e) => toDetailPage(e)}
    >
      <div className='room-item'>
        {!showSwiper && <div className={classNames('cover', showGlisten ? 'shan' : '')}>
          <img src={item.picture_url} alt="" />
        </div>
        }
        {showSwiper && <AibiCarousel swiperList={item.picture_urls || []} />}
        <div className='desc'>{item.verify_info.messages.join('.')}</div>
        <div className='product-name'>{item.name}</div>
        <div className='price'>{item.price_format}<span> / 晚</span></div>
        <div className='evaluate'>
          <span className='mark'>
            <Rate disabled value={item.reviews_count} style={{ fontSize: 10 }} />
          </span>
          <span className='commonCount' style={{ fontSize: item?.bottom_info?.font_size }}>{item.reviews_count} {item?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemWapper>
  )
})

export default RoomItem