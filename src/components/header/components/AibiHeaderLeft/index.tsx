import { ReactComponent as LogoSvg } from '@/icons/svg/logo.svg'
import { memo } from 'react'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderLeft = memo(() => {
  return (
    <AbiHeaderCenterWrapper className='left'>
      <div>
        <LogoSvg/>
      </div>
    </AbiHeaderCenterWrapper>

  )
})

export default AbiHeaderLeft