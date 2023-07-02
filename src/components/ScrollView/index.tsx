import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWapper } from './style'
interface ScrollViewProps {
  children : React.ReactNode,
  scrollChildrenClassName : string
}
const ScrollView = memo(( { children , scrollChildrenClassName} : ScrollViewProps ) => {
  const [ showRightIcon , setShowRightIcon ] = useState(false)
  const [ showLeftIcon , setShowLeftIcon ] = useState(false)
  const [ positionIndex , setPositionIndex ] = useState(0)
  const cacheTotalDistance = useRef(0)
  const scrollContentRef = useRef<HTMLDivElement>(null)
  const [offsetLeft , setOffset] = useState(0)
  useEffect( () => {
    console.log('childre更新');
    const scrollWidth = scrollContentRef.current!.scrollWidth
    const scrollClient = scrollContentRef.current!.clientWidth
    const  totalDistance = scrollWidth - scrollClient
    cacheTotalDistance.current = totalDistance
    setShowRightIcon( cacheTotalDistance.current > offsetLeft)
  } , [children])

  const controlClickHandle = (isRight : boolean) => {
    const currentIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const scrollContentAll = scrollContentRef.current?.querySelectorAll(`.${scrollChildrenClassName}`) || []
    const currentTabItem = scrollContentAll[currentIndex] as HTMLElement

    const currentOffseteft = currentTabItem.offsetLeft

    setOffset(currentOffseteft)

    setPositionIndex(currentIndex)
    
    setShowRightIcon(cacheTotalDistance.current > currentOffseteft)
    
    setShowLeftIcon(currentOffseteft > 0)
  }
  
  return (
    <ScrollViewWapper className='ScrollViewWapper'>
      { showLeftIcon && <div className='leftIcon' onClick={() => controlClickHandle(false)}> <LeftIcon/></div>}
      <div className='scroll-content-hidden'>
        <div className='scroll-content' ref={scrollContentRef} style={{transform : `translate(-${offsetLeft}px)` }}>
          {children} 
        </div>
      </div>
      { showRightIcon && <div className='rightIcon' onClick={() => controlClickHandle(true)}><RightIcon/></div>}
    </ScrollViewWapper> 
  )
})

export default ScrollView