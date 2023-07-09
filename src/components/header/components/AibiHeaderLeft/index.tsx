import { ReactComponent as LogoSvg } from '@/icons/svg/logo.svg'
import { LeftOutlined } from '@ant-design/icons'
import { memo, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderLeft = memo(() => {
  const navigate = useNavigate()
  const [isHomePage, setisHomePage] = useState(true)
  const Location = useLocation()
  const toHomePage = () => {
    if (Location.pathname === '/home') return
    navigate('/')
  }
  useEffect(() => {
    if (Location.pathname === '/home') {
      setisHomePage(true)
    } else {
      setisHomePage(false)
    }
  }, [Location.pathname])
  return (
    <AbiHeaderCenterWrapper className='left'>
      {isHomePage && <div className='logo' onClick={() => toHomePage()}>
        <LogoSvg fill='var(--primary-color)' />
        <div className='text'>爱彼迎</div>
      </div>}
      {
        !isHomePage && <div className='back'>
          <LeftOutlined className='icon' style={{ width: 50, height: 52 }} onClick={() => history.back()} />
          <div className='back-text'>返回</div>
        </div>
      }
    </AbiHeaderCenterWrapper>

  )
})

export default AbiHeaderLeft