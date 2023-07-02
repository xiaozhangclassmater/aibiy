import AibiCard from '@/components/Card'
import { memo } from 'react'
import ScrollView from '../ScrollView'
import SectionTitle from '../SectionTitle'
import { SectionCategaryRgWapper } from './style'
interface SectionCategaryRgProps {
  catagaryInfo : cityCataGaryType
}
const SectionCategaryRg = memo(({ catagaryInfo }:SectionCategaryRgProps) => {
  return (
   <SectionCategaryRgWapper>
    <SectionTitle title={catagaryInfo.title} subTitle={catagaryInfo.subtitle} />
      <ScrollView scrollChildrenClassName='card'>
        {catagaryInfo.list && catagaryInfo.list.map(item => <AibiCard key={item.city} item={item} style={{}}/>)}
      </ScrollView>
   </SectionCategaryRgWapper>
  )
})

export default SectionCategaryRg