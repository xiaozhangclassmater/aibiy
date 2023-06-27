import { forwardRef, memo } from 'react'
import { MenusWrapper } from '../style'
interface MenusProps {
  menuItemClickHandle : (type : string) => void,
  ref: React.MutableRefObject<null>
}

const Menus = memo(forwardRef(( { menuItemClickHandle } : MenusProps , ref : any) => {
  return (
    <MenusWrapper>
      <div className='menus-contianer' ref={ref}>
        <ul>
          <li  onClick={() => menuItemClickHandle('register')}>注册</li>
          <li  onClick={() => menuItemClickHandle('login')}>登录</li>
          <div className='line'></div>
          <li  onClick={() => menuItemClickHandle('publish')}>发布房源</li>
          <li  onClick={() => menuItemClickHandle('help')}>帮助</li>
        </ul>
      </div>
    </MenusWrapper>
  )
}))

export default Menus