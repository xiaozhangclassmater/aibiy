import { ReactComponent as LogoSvg } from '@/icons/svg/logo.svg'
import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderLeft = memo(() => {
  const  navigate =  useNavigate()
  const Location = useLocation()
  const toHomePage = () => {
    // if(Location.pathname === '/home') return    
    navigate('/')
  }
  return (
    <AbiHeaderCenterWrapper  className='left'>
      <div className='logo' onClick={() => toHomePage()}>
        <LogoSvg fill='var(--primary-color)'/>
       <div className='text'>爱彼迎</div>
      </div>
    </AbiHeaderCenterWrapper>

  )
})

export default AbiHeaderLeft