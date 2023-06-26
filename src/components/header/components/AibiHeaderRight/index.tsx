import { memo, useMemo, useState } from 'react';
import Menus from './components/Menus';
import { AbiHeaderRightWrapper } from './style';

const AibiHeaderRight = memo(() => {
  const GlobalSvg = useMemo(()=> require('@/icons/svg/global.svg').ReactComponent , [])
  const MenusSvg = useMemo(()=> require('@/icons/svg/menu.svg').ReactComponent , [])
  const PersonalSvg = useMemo(()=> require('@/icons/svg/personal.svg').ReactComponent , [])
  const [ showMenus , setShowMenus ] = useState(false)
  const persolalMenuHandle = ()=> {
    console.log(111);
    
    setShowMenus(!showMenus)
  }
  return (
    <AbiHeaderRightWrapper className='right'>
      <div className='Feature-Menus'>
        <div className='icon-global'>
          <GlobalSvg className='icon-global-svg' />
        </div>
        <div className='personal-feature-menus' onClick={()=> persolalMenuHandle()} >
          <div className='menus-svg'>
            <MenusSvg/>
          </div>
          <div className='Personal-Svg'>
            <PersonalSvg/>
          </div>
        </div>
        {showMenus && <Menus/>}
      </div>
    </AbiHeaderRightWrapper>
     
  )
})

export default AibiHeaderRight