import themeConfig from '@/assets/theme';
import React, { memo, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { SectionFooterWapper } from './style';

type SectionFooterProps = {
  text? : string,
  mtop? : string,
  IconSvg : React.FC<React.SVGProps<SVGElement>>;
  cityName ?: string
  seeMore : () => void
}

const SectionFooter = memo(({text , mtop , IconSvg , seeMore , cityName} : SectionFooterProps) => {
  const routerLink = useNavigate()
  const cacheText = useMemo(() =>( text ||`查看${cityName ? `  ${cityName}  ` : ''}更多房源`) , [cityName])
  const seeMoreHousingResource = () => {
    routerLink('/entire')
    seeMore()
  }
  return (
    <SectionFooterWapper mtop={mtop} onClick={() => seeMoreHousingResource() } >
      <div className='text'>{cacheText}   
      <span className='icon'><IconSvg fill={themeConfig.secondColor}/></span>
      </div>
    </SectionFooterWapper>
  )
})

export default SectionFooter