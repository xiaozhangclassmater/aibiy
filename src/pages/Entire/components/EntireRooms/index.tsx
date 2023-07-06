import Loading from '@/components/Loading';
import RoomGroup from '@/components/RoomGroup';
import { isEmpty } from '@/utils';
import { memo } from 'react';
import { EntireRoomsWapper } from './style';
interface EntireRoomsProps {
  info : EntireRoomsInfo ,
  loading ? : boolean,
}
const EntireRooms = memo(( { info , loading } :EntireRoomsProps) => {
  return (
    <EntireRoomsWapper className='entire-room-wapper' style={{ height : loading ? '500px' : '' }} >
    <div className='wapper'>
      <RoomGroup loading={loading} maxRoomItemCount={20} proportion={'20%'} showFooter={false} productInfo={{...info , title : '300多家住所',subTitle : '你想要的都在爱彼迎'}} />
    </div>
    {isEmpty(info) && <Loading/>}
    </EntireRoomsWapper>
  )
})

export default EntireRooms