import { memo } from 'react'
import AbiHeaderCenterWrapper from './style/index'
const AbiHeaderCenter = memo(() => {
  return (
    <AbiHeaderCenterWrapper className='center'>
      <div className='search-bar'>
        <div className='text'>
          搜索房源和体验
        </div>
      </div>
    </AbiHeaderCenterWrapper>
  )
})

export default AbiHeaderCenter