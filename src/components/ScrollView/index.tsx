import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWapper } from './style'
interface ScrollViewProps {
  children : React.ReactNode
}
const ScrollView = memo(( { children } : ScrollViewProps ) => {
  console.log(1111);
  
  const [ showRightIcon , setShowRightIcon ] = useState(false)
  const [ showLeftIcon , setShowLeftIcon ] = useState(false)
  const [ positionIndex , setPositionIndex ] = useState(0)
  const cacheTotalDistance = useRef(0)
  const scrollContentRef = useRef<HTMLDivElement>(null)
  const [offset , setOffset] = useState(0)
  useEffect( () => {
    const scrollWidth = scrollContentRef.current!.scrollWidth
    const scrollClient = scrollContentRef.current!.clientWidth
    const  totalDistance = scrollWidth - scrollClient
    cacheTotalDistance.current = totalDistance
    
    setShowRightIcon( totalDistance > 0)
  } , [children])

  const controlClickHandle = (isRight : boolean) => {
    const currentIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const scrollContentAll = scrollContentRef.current?.querySelectorAll('.tab-item') || []
    const currentTabItem = scrollContentAll[currentIndex] as HTMLElement

    const currentOffseteft = currentTabItem.offsetLeft
    
    // scrollContentRef.current!.style.transform = `translate(-${currentOffseteft}px)`

    setOffset(currentOffseteft)

    setPositionIndex(currentIndex)
    
    setShowRightIcon(cacheTotalDistance.current > currentOffseteft)
    // console.log();
    
    setShowLeftIcon(currentOffseteft > 0)
  }
  // const logSet = () => {}
  
  return (
    <ScrollViewWapper className='ScrollViewWapper'>
      { showLeftIcon && <div className='leftIcon' onClick={() => controlClickHandle(false)}> <LeftIcon/></div>}
      <div className='scroll-content-hidden'>
        <div className='scroll-content' ref={scrollContentRef} style={{transform : `translate(-${offset}px)` }}>
          {children} 
        </div>
      </div>
      { showRightIcon && <div className='rightIcon' onClick={() => controlClickHandle(true)}><RightIcon/></div>}
    </ScrollViewWapper> 
  )
})

export default ScrollView