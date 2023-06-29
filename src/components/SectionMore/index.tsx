import React, { memo } from 'react';
import { SectionMoreWapper } from './style';

interface SectionMoreProps {
  text? : string,
  mTop? : string,
  IconSvg : React.FC<React.SVGProps<SVGElement>>;
}
const SectionMore = memo(({text , mTop , IconSvg} : SectionMoreProps) => {
  return (
    <SectionMoreWapper mTop={mTop}>
      <div className='text'>{text|| '查看更多房源'}
      <span className='icon'>
        <IconSvg/>
      </span>
      </div>
    </SectionMoreWapper>
  )
})

export default SectionMore