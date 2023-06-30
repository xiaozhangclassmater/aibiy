import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import { TabCardWapper } from './style'

interface TabCardProps {
  tabList : dest_address_list,
  getProductInfo : (cityName : string) => void
}

const TabCard = memo(( { tabList , getProductInfo } : TabCardProps ) => {
  // console.log("render");
  const [currentIndex , setCurrentIndex] = useState(0)
  const [showRightIcon , setShowRightIcon] = useState(false)
  const tabContentRef = useRef<HTMLDivElement>(null)
  const tabItemClickHandle = (index : number , cityName : string) : void => {
    setCurrentIndex(index)
    getProductInfo(cityName)
  }
  const getTabContentScrollWidth = () => tabContentRef.current?.scrollWidth as number
  
  const getTabContentClientWidth = () => tabContentRef.current?.clientWidth as number
  
  useEffect( () => {
    const scrollWidth = getTabContentScrollWidth()
    const clientWidth = getTabContentClientWidth()
    if(scrollWidth - clientWidth > 0){
      setShowRightIcon(true)
    }
    getProductInfo(tabList[0].name)
  } , [])
  const computedIndex = (index : number) => currentIndex === index
  
  return (
    <TabCardWapper>
      <div className='tab-container'>
        <div className='leftIcon'>
          <LeftIcon/>
        </div>
        <div className='tab-content' ref={tabContentRef}>
          {
            tabList.length && 
            tabList.map((item , index) => <div className={classNames('tab-item' ,{ 'active-item' : computedIndex(index)})}  
            key={index} onClick={() => tabItemClickHandle(index , item.name)}>{item.name}</div>)
          }
        </div>
        {showRightIcon && <div className='rightIcon'><RightIcon/></div>}
      </div>
    </TabCardWapper>
  )
})

export default TabCard