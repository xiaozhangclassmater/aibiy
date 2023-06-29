import { memo } from 'react'
import { SectionTitleWapper } from './style'
interface SectionTitleProps {
  title   : string,
  subTitle  : string
}
const SectionTitle = memo(( { title , subTitle} : SectionTitleProps) => {
  return (
    <SectionTitleWapper>
      <p className='title'>{title}</p>
      <div className='desc'>{subTitle}</div>
    </SectionTitleWapper>
  )
})

export default SectionTitle