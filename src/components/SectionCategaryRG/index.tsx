import AibiCard from '@/components/Card'
import { useLazyLoad } from '@/hooks/modules/useLazyLoad'
import { isEmpty } from '@/utils'
import { memo } from 'react'
import ScrollView from '../ScrollView'
import SectionTitle from '../SectionTitle'
import ScRgSkeleton from './ScRgSkeleton'
import { SectionCategaryRgWapper } from './style'
interface SectionCategaryRgProps {
  catagaryInfo : cityCataGaryType,
  requestFn?: () => void
}
const SectionCategaryRg = memo(({ catagaryInfo , requestFn }:SectionCategaryRgProps) => {
  console.log('render SectionCategaryRg');
  const newFn = requestFn ? requestFn : () => {}
  const { elRef:sectionCatagrayRgRef } = useLazyLoad(newFn)
  return (
   <SectionCategaryRgWapper ref={sectionCatagrayRgRef as any} >
    {
    (!isEmpty(catagaryInfo)) && <div className='sectionCategaryRg-wapper'>
      <SectionTitle title={catagaryInfo.title} subTitle={catagaryInfo.subtitle} />
        <ScrollView scrollChildrenClassName='card'>
          {catagaryInfo.list && catagaryInfo.list.map(item => <AibiCard key={item.city} item={item}/>)}
        </ScrollView>
    </div>
    }
    {
      isEmpty(catagaryInfo) && <ScRgSkeleton/>
    }
    
   </SectionCategaryRgWapper>
  )
})

export default SectionCategaryRg