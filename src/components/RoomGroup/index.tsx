import { ReactComponent as RightSvg } from '@/icons/svg/arrow-right.svg';
import { isEmpty } from '@/utils';
import { memo, useState } from 'react';
import RoomItem from '../RoomItem';
import SectionMore from '../SectionMore';
import SectionTitle from '../SectionTitle';
import RoomGroupSkeleton from './RoomGroupSkeleton';
import { RoomGroupWapper } from './style';
interface RoomGroupProps {
  productInfo : baseRoomInfo,
  skeletonNum? : number,
  proportion? : string | number,
}
const RoomGroup = memo(( { productInfo  , skeletonNum = 8 , proportion = '25%' } : RoomGroupProps ) => {
  const [ skeletonCount] = useState(new Array(skeletonNum).fill(''))  
  return (
    <RoomGroupWapper>
      {
        !(isEmpty(productInfo)) && <div className='room-group-wapper'>
        <SectionTitle title={productInfo.title || '热门城市'} subTitle={productInfo.subTitle || "美丽的城市，邻人向往"} />
        <div className='product-item-container'>
          {productInfo.list && productInfo.list.map(item => <RoomItem proportion={proportion} item={item} key={item.id}/>)}
        </div>
        <SectionMore mTop='15px' IconSvg={RightSvg} />
      </div>
      }
      {isEmpty(productInfo) && <RoomGroupSkeleton/>}
    </RoomGroupWapper>
  ) 
})

export default RoomGroup