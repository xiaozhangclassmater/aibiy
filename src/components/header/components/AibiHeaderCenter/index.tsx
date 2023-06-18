import { memo } from 'react'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderCenter = memo(() => {
  return (
    <AbiHeaderCenterWrapper className='center'>
      <div className='center-content'>
        center
      </div>
    </AbiHeaderCenterWrapper>
  )
})

export default AbiHeaderCenter