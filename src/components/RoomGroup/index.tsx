import useLazyLoad from '@/hooks/modules/useLazyLoad';
import { ReactComponent as RightSvg } from '@/icons/svg/arrow-right.svg';
import { isEmpty } from '@/utils';
import { memo, useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Rooms from '../Rooms';
import SectionFooter from '../SectionFooter';
import SectionTitle from '../SectionTitle';
import RoomGroupSkeleton from './RoomGroupSkeleton';
import { RoomGroupWapper } from './style';
interface RoomGroupProps {
  maxRoomItemCount?: number
  productInfo: baseRoomInfo,
  skeletonNum?: number,
  proportion?: string | number,
  showFooter?: boolean
  loading?: boolean,
  showSwiper?: boolean
  requestFn?: () => void
}
const RoomGroup = memo(({
  productInfo,
  skeletonNum = 8,
  proportion = '25%',
  maxRoomItemCount = 8,
  showFooter = true,
  loading,
  showSwiper = false,
  requestFn
}: RoomGroupProps
) => {
  const { elRef: roomGroupRef } = useLazyLoad<HTMLDivElement>(requestFn ? requestFn : () => { })
  const animationRef = useRef(null)
  const seeMore = useCallback(() => { }, [productInfo])
  return (
    <RoomGroupWapper ref={roomGroupRef}>
      {
        <div className='room-group-wapper fead'>
          <SectionTitle title={productInfo?.title || '热门城市'} subTitle={productInfo?.subTitle || "美丽的城市，邻人向往"} />
          <CSSTransition classNames={'fead'} timeout={300} in={loading} >
            <Rooms showSwiper={showSwiper} proportion={proportion} ref={animationRef} list={productInfo?.list || []} maxRoomItemCount={maxRoomItemCount} />
          </CSSTransition>
          {(showFooter && (!isEmpty(productInfo))) && <SectionFooter mtop='15px' IconSvg={RightSvg} seeMore={seeMore} />}
        </div>
      }
      {isEmpty(productInfo) && <RoomGroupSkeleton skeletonNum={skeletonNum} />}
    </RoomGroupWapper>
  )
})




export default RoomGroup