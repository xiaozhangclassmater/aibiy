import { memo } from 'react'
import { HomeBannerWapper } from './style'

const HomeBanner = memo(() => {
  return (
   <HomeBannerWapper className='Banner-container'></HomeBannerWapper>
  )
})

export default HomeBanner