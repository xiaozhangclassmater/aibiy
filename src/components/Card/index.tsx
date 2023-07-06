import classNames from 'classnames'
import { memo, useState } from 'react'
import { CardWapper } from './style'
interface CardProps {
  item : cityItem
  style? : React.CSSProperties
}
const AibiCard = memo(({style , item} : CardProps) => {
  const [ showGlisten , setShowGlisten ] = useState(true)
  setTimeout(() => {
    setShowGlisten(false)
  }, 1000);
  return (
    <CardWapper className='card' style={style}>
      <div className={classNames('card-image' , showGlisten ? 'shan' : '')}>
        <img src={item.picture_url} alt="" />
        <div className='mask'></div>
      </div>
      <div className='name'>{item.city}</div>
      <div className='direction'>均价{item.price}</div>
      
    </CardWapper>
  )
})

export default AibiCard