import { ReactComponent as RightSvg } from '@/icons/svg/arrow-right.svg';
import { isEmpty } from '@/utils';
import { memo, useCallback, useState } from 'react';
import RoomItem from '../RoomItem';
import SectionFooter from '../SectionFooter';
import SectionTitle from '../SectionTitle';
import RoomGroupSkeleton from './RoomGroupSkeleton';
import { RoomGroupWapper } from './style';
interface RoomGroupProps {
  productInfo : baseRoomInfo,
  skeletonNum? : number,
  proportion? : string | number,
}
const RoomGroup = memo(( { productInfo  , skeletonNum = 8 , proportion = '25%' } : RoomGroupProps ) => {
  const [ maxRenderCount , setMaxRenderCount] = useState(8)
  const seeMore = useCallback((isPackUp : boolean) => {
    setMaxRenderCount(isPackUp ? 8 : productInfo.list.length)
  } , [productInfo])
  return (
    <RoomGroupWapper>
      {
        !(isEmpty(productInfo)) && <div className='room-group-wapper'>
        <SectionTitle title={productInfo.title || '热门城市'} subTitle={productInfo.subTitle || "美丽的城市，邻人向往"} />
        <div className='product-item-container'>
          {productInfo.list && productInfo.list.slice(0 , maxRenderCount).map(item => <RoomItem proportion={proportion} item={item} key={item.id}/>)}
        </div>
        <SectionFooter mtop='15px' IconSvg={RightSvg} seeMore={seeMore}  />
      </div>
      }
      {isEmpty(productInfo) && <RoomGroupSkeleton skeletonNum={skeletonNum}/>}
    </RoomGroupWapper>
  ) 
})




export default RoomGroup