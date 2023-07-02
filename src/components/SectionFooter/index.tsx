import themeConfig from '@/assets/theme';
import React, { memo, useMemo, useState } from 'react';
import { SectionFooterWapper } from './style';

type SectionFooterProps = {
  text? : string,
  mtop? : string,
  IconSvg : React.FC<React.SVGProps<SVGElement>>;
  cityName ?: string
  seeMore : (isPackUp : boolean) => void
}

const SectionFooter = memo(({text , mtop , IconSvg , seeMore , cityName} : SectionFooterProps) => {
  // console.log('render' , cityName);
  
  const [ isPackUp , setisPackUp ] = useState(false)
  const computedText = useMemo(() => isPackUp ?  "收起" : ( text ||`查看${cityName ? `  ${cityName}  ` : ''}更多房源`) , [isPackUp , cityName])
  const seeMoreHousingResource = () => {
    seeMore(isPackUp)
    setisPackUp(!isPackUp)
  }
  return (
    <SectionFooterWapper mtop={mtop} onClick={() => seeMoreHousingResource() } >
      <div className='text'>{computedText}   
      <span className='icon'><IconSvg fill={themeConfig.secondColor}/></span>
      </div>
    </SectionFooterWapper>
  )
})

export default SectionFooter