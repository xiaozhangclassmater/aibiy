import { memo } from 'react'
import { CardWapper } from './style'
interface CardProps {
  item : cityItem
  style : React.CSSProperties
}
const AibiCard = memo(({style , item} : CardProps) => {
  return (
    <CardWapper className='card' style={style}>
      <div className='card-image'>
        <img src={item.picture_url} alt="" />
        <div className='mask'></div>
      </div>
      <div className='name'>{item.city}</div>
      <div className='direction'>均价{item.price}</div>
      
    </CardWapper>
  )
})

export default AibiCard