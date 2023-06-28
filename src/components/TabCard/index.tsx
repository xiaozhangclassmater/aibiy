import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import { memo, useState } from 'react'
import { TabCardWapper } from './style'

const TabCard = memo(() => {
  const [currentIndex , setCurrentIndex] = useState(0)
  return (
    <TabCardWapper>
      <div className='tab-container'>
        <div className='leftIcon'>
          <LeftIcon/>
        </div>
        <div className='tab-item'>南京</div>
        <div className='tab-item'>广州</div>
        <div className='tab-item'>重庆</div>
        <div className='tab-item'>长沙</div>
        <div className='tab-item'>西安</div>
        <div className='rightIcon'>
          <RightIcon/>
        </div>
      </div>
    </TabCardWapper>
  )
})

export default TabCard