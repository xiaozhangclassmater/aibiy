import Loading from '@/components/Loading';
import RoomGroup from '@/components/RoomGroup';
import { memo } from 'react';
import { EntireRoomsWapper } from './style';
interface EntireRoomsProps {
  info : EntireRoomsInfo ,
  loading ? : boolean,
}
const EntireRooms = memo(( { info , loading } :EntireRoomsProps) => {
  console.log('info' , info);
  return (
    <EntireRoomsWapper className='entire-room-wapper' style={{ height : loading ? '500px' : '' }} >
    <div className='wapper'>
      <RoomGroup showSwiper loading={loading} maxRoomItemCount={20} proportion={'20%'} showFooter={false} productInfo={{...info , title : '300多家住所',subTitle : '你想要的都在爱彼迎'}} />
    </div>
    {loading && <Loading/>}
    </EntireRoomsWapper>
  )
})

export default EntireRooms