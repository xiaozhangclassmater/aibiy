import Loading from '@/components/Loading';
import RoomItem from '@/components/RoomItem';
import SectionTitle from '@/components/SectionTitle';
import { memo } from 'react';
import { EntireRoomsWapper } from './style';
interface EntireRoomsProps {
  info : EntireRoomsInfo ,
  loading ? : boolean
}
const EntireRooms = memo(( { info , loading } :EntireRoomsProps) => {
  return (
    <EntireRoomsWapper className='entire-room-wapper' style={{ height : loading ? '500px' : '' }} >
     
    {!loading && <div className='wapper'>
      <SectionTitle title='300多所住处'/>
      <div className='room-container'>
      {info.list.map(item => <RoomItem key={item.id} item={item} proportion={'20%'}  />)}
      </div>
    </div>
    }
    { 
      loading && <Loading />
    }
    
    </EntireRoomsWapper>
  )
})

export default EntireRooms