import { memo, useState } from 'react';
import RoomItem from '../RoomItem';
import TabCard from '../TabCard';
import AibiSkeleton from '../skeleton';
import TitleSkeleton from '../skeleton/TitleSkeleton';
import { RoomGroupWapper } from './style';
interface RoomGroupProps {
  productInfo : baseRoomInfo,
  skeletonNum? : number,
  proportion? : string | number
}
const RoomGroup = memo(( { productInfo  , skeletonNum = 8 , proportion = '25%'} : RoomGroupProps ) => {
  const [ skeletonCount] = useState(new Array(skeletonNum).fill(''))  
  return (
    <RoomGroupWapper>
      <div className='room-group-wapper'>
        {productInfo.title && <p className='title'>{productInfo.title}</p>}
        {!(productInfo.title) && <TitleSkeleton style={{marginTop : '10px',width : '200px'}}/>}
        {productInfo.subTitle &&  <div className='description'>{productInfo.subTitle}</div>}
        <TabCard/>
        <div className='product-item-container'>
          {productInfo.list && productInfo.list.map(item => <RoomItem proportion={proportion} item={item} key={item.id}/>)}
          {!(productInfo.list) && skeletonCount.map((item , index) => <AibiSkeleton.RoomItemSkt active key={index}/>)}
        </div>
      </div>
    </RoomGroupWapper>
  ) 
})

export default RoomGroup