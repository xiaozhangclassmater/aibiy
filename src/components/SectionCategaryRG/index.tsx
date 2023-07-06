import AibiCard from '@/components/Card'
import { useLazyLoad } from '@/hooks/modules/useLazyLoad'
import { isEmpty } from '@/utils'
import { memo, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import ScrollView from '../ScrollView'
import SectionTitle from '../SectionTitle'
import ScRgSkeleton from './ScRgSkeleton'
import { SectionCategaryRgWapper } from './style'
interface SectionCategaryRgProps {
  catagaryInfo : cityCataGaryType,
  loading? : boolean,
  requestFn?: () => void
}
const SectionCategaryRg = memo(({ catagaryInfo , requestFn , loading }:SectionCategaryRgProps) => {
  const newFn = requestFn ? requestFn : () => {}
  const { elRef:sectionCatagrayRgRef } = useLazyLoad(newFn)
  const animationRef = useRef(null)
  return (
   <SectionCategaryRgWapper ref={sectionCatagrayRgRef as any} >
    {
     <div className='sectionCategaryRg-wapper fead'>
      <SectionTitle title={catagaryInfo?.title} subTitle={catagaryInfo?.subtitle} />
        <CSSTransition in={loading} timeout={300} classNames={'fead'} >
          <ScrollView scrollChildrenClassName='card' ref={animationRef}>
            {catagaryInfo?.list && catagaryInfo?.list?.map(item => <AibiCard key={item.city} item={item}/>)}
          </ScrollView>
        </CSSTransition>
    </div>
    }
    {
      isEmpty(catagaryInfo) && <ScRgSkeleton/>
    }
    
   </SectionCategaryRgWapper>
  )
})

export default SectionCategaryRg