import { memo } from 'react'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderLeft = memo(() => {
  return (
    <AbiHeaderCenterWrapper className='left'>
      <div>AbiHeaderLeft</div>
    </AbiHeaderCenterWrapper>

  )
})

export default AbiHeaderLeft