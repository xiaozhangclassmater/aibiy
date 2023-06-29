import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import { TabCardWapper } from './style'

interface TabCardProps {
  tabList : dest_address_list,
  getProductInfo : (cityName : string) => void
}

const TabCard = memo(( { tabList , getProductInfo } : TabCardProps ) => {
  console.log("render");
  
  const [currentIndex , setCurrentIndex] = useState(0)
  const tabItemClickHandle = (index : number , cityName : string) : void => {
    setCurrentIndex(index)
    getProductInfo(cityName)
  }
  useEffect( () => {
    getProductInfo(tabList[0].name) 
  } , [])
  const computedIndex = (index : number) => currentIndex === index
  
  return (
    <TabCardWapper>
      <div className='tab-container'>
        <div className='leftIcon'>
          <LeftIcon/>
        </div>
        {
          tabList.length && 
          tabList.map((item , index) => <div className={classNames('tab-item' ,{ 'active-item' : computedIndex(index)})}  
          key={index} onClick={() => tabItemClickHandle(index , item.name)}>{item.name}</div>)
        }
        <div className='rightIcon'>
          <RightIcon/>
        </div>
      </div>
    </TabCardWapper>
  )
})

export default TabCard