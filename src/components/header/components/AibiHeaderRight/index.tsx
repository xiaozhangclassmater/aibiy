import { memo, useMemo } from 'react';
import AbiHeaderRightWrapper from './style';

const AibiHeaderRight = memo(() => {
  const GlobalSvg = useMemo(()=> require('@/icons/svg/global.svg').ReactComponent , [])
  const MenusSvg = useMemo(()=> require('@/icons/svg/menu.svg').ReactComponent , [])
  const PersonalSvg = useMemo(()=> require('@/icons/svg/personal.svg').ReactComponent , [])
  return (
    <AbiHeaderRightWrapper className='right'>
      <div className='Feature-Menus'>
        <div className='icon-global'>
          <GlobalSvg className='icon-global-svg' />
        </div>
        <div className='personal-feature-menus' >
          <div className='menus-svg'>
            <MenusSvg/>
          </div>
          <div className='Personal-Svg'>
            <PersonalSvg/>
          </div>
        </div>
      </div>
    </AbiHeaderRightWrapper>
     
  )
})

export default AibiHeaderRight