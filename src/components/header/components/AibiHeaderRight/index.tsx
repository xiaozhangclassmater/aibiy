import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Menus from './components/Menus';
import { AbiHeaderRightWrapper } from './style';

const AibiHeaderRight = memo(() => {
  const GlobalSvg = useMemo(() => require('@/icons/svg/global.svg').ReactComponent, [])
  const MenusSvg = useMemo(() => require('@/icons/svg/menu.svg').ReactComponent, [])
  const PersonalSvg = useMemo(() => require('@/icons/svg/personal.svg').ReactComponent, [])
  const [showMenus, setShowMenus] = useState(false)
  const menusContainer = useRef<Element>(null)
  const router = useNavigate()
  useEffect(() => {
    bindGlobalWindowEvent()
    return () => {
      cancleGlobalWindowEvent()
    }
  }, [])
  /**
   * 绑定全局window 事件,判断元素是否咋点击区域内
   */

  const bindGlobalWindowEvent = () => {
    window.addEventListener('click', windowHandleClick, true)
  }
  const cancleGlobalWindowEvent = () => {
    window.removeEventListener('click', windowHandleClick)
  }
  const windowHandleClick = (e: MouseEvent) => {
    if (menusContainer.current?.contains(e.target as Node)) return
    setShowMenus(false)
  }
  const persolalMenuHandle = () => {
    setShowMenus(!showMenus)
  }
  // 子组件 item 点击
  const menuItemClickHandle = (type: string) => {
    if (type === 'login') {
      router('/login')
    }
    console.log(type);

  }
  return (
    <AbiHeaderRightWrapper className='right'>
      <div className='Feature-Menus'>
        <div className='icon-global'>
          <GlobalSvg className='icon-global-svg' />
        </div>
        <div className='personal-feature-menus' onClick={() => persolalMenuHandle()} >
          <div className='menus-svg'>
            <MenusSvg />
          </div>
          <div className='Personal-Svg'>
            <PersonalSvg />
          </div>
        </div>
        {showMenus && <Menus ref={menusContainer} menuItemClickHandle={menuItemClickHandle} />}
      </div>
    </AbiHeaderRightWrapper>

  )
})

export default AibiHeaderRight