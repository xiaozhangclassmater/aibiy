import { memo } from 'react'
import { MenusWrapper } from '../style'

const Menus = memo(() => {
  return (
    <MenusWrapper>
      <div className='menus-contianer'>
        <ul>
          <li>注册</li>
          <li>登录</li>
          <li>发布房源</li>
          <li>帮助</li>
        </ul>
      </div>
    </MenusWrapper>
  )
})

export default Menus