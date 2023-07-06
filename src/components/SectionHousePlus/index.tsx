import { useLazyLoad } from '@/hooks/modules/useLazyLoad';
import { isEmpty } from '@/utils';
import { memo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import RoomItem from '../RoomItem';
import ScrollView from '../ScrollView';
import SectionTitle from '../SectionTitle';
import ShpSkeleton from './ShpSkeleton';
import { SectionHousePlusWapper } from './style';
interface SectionHousePlusProps {
  info : baseRoomInfo<newAddFiled>,
  requestFn? : () => void,
  loading ? : boolean
}

const SectionHousePlus = memo(({ info , requestFn , loading }:SectionHousePlusProps ) => {
  const newFn = (requestFn ? requestFn : () => {})
  const { elRef: plusRef } = useLazyLoad(newFn)
  const animationRef = useRef(null)
  return (
    <>
      <SectionHousePlusWapper className='SectionHousePlusWapper fead' ref={plusRef}>
        <SectionTitle title={info?.title} subTitle={info?.subTitle} />
        <CSSTransition in={loading} timeout={300} classNames={'fead'}>
          <ScrollView scrollChildrenClassName='RoomItemWapper' ref={animationRef}>
            {
              info?.list?.map(item => <RoomItem key={item.id} item={item} proportion={'20%'} />)
            }
          </ScrollView>
        </CSSTransition>
      </SectionHousePlusWapper>
    {
      isEmpty(info) && <ShpSkeleton/>
    }
    </>
  )
})

export default SectionHousePlus