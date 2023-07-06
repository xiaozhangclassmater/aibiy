import { forwardRef, memo } from 'react'
import RoomItem from '../RoomItem'
import { RoomsWapper } from './style'
interface RoomsProps {
  list : RoomItem[],
  proportion : string | number,
  maxRoomItemCount : number,
  showShanAnimation? : boolean
}
const Rooms = memo(forwardRef<HTMLDivElement ,RoomsProps>(( {
  list = [],
  proportion = '25%',
  maxRoomItemCount = 8,
} , ref ) => {
  return (
    <RoomsWapper className='rooms-Wapper' ref={ref}>
      {list.slice(0 , maxRoomItemCount).map(item => {
        return (
        <RoomItem proportion={proportion || '25%'} item={item} key={item.id}/>
        )
      })}
    </RoomsWapper>
  )
}))

export default Rooms