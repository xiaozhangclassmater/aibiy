import { useLazyLoad } from '@/hooks/modules/useLazyLoad';
import { isEmpty } from '@/utils';
import { memo } from 'react';
import RoomItem from '../RoomItem';
import ScrollView from '../ScrollView';
import SectionTitle from '../SectionTitle';
import ShpSkeleton from './ShpSkeleton';
import { SectionHousePlusWapper } from './style';

interface SectionHousePlusProps {
  info : baseRoomInfo<newAddFiled>,
  requestFn? : () => void
}

const SectionHousePlus = memo(({ info , requestFn }:SectionHousePlusProps ) => {
  const newFn = (requestFn ? requestFn : () => {})
  const { elRef: plusRef } = useLazyLoad(newFn)
  return (
    <>
    {!isEmpty(info) && <SectionHousePlusWapper className='SectionHousePlusWapper' ref={plusRef as any}>
      <SectionTitle title={info.title} subTitle={info.subTitle} />
      <ScrollView scrollChildrenClassName='RoomItemWapper'>
        {
          info.list.map(item => <RoomItem key={item.id} item={item} proportion={'20%'} />)
        }
      </ScrollView>
    </SectionHousePlusWapper>}
    {
      isEmpty(info) && <ShpSkeleton/>
    }
    </>
  )
})

export default SectionHousePlus