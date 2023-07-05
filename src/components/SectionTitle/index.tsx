import { memo } from 'react'
import { SectionTitleWapper } from './style'
interface SectionTitleProps {
  title   : string,
  subTitle?  : string
}
const SectionTitle = memo(( { title , subTitle} : SectionTitleProps) => {
  return (
    <SectionTitleWapper>
      <p className='title'>{title}</p>
     { subTitle && <div className='desc'>{subTitle || "美丽的城市，邻人向往"}</div>}
    </SectionTitleWapper>
  )
})

export default SectionTitle