import { forwardRef, memo } from 'react'
import RoomItem from '../RoomItem'
import { RoomsWapper } from './style'
interface RoomsProps {
  list : RoomItem[],
  proportion : string | number,
  maxRoomItemCount : number,
  showSwiper ? : boolean
}
const Rooms = memo(forwardRef<HTMLDivElement ,RoomsProps>(( {
  list = [],
  proportion = '25%',
  maxRoomItemCount = 8,
  showSwiper = false
} , ref ) => {
  return (
    <RoomsWapper className='rooms-Wapper' ref={ref}>
      {list.slice(0 , maxRoomItemCount).map(item => {
        return (
        <RoomItem proportion={proportion || '25%'} showSwiper={showSwiper} item={item} key={item.id}/>
        )
      })}
    </RoomsWapper>
  )
}))

export default Rooms