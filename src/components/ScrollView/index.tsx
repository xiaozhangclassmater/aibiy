import { ReactComponent as LeftIcon } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIcon } from '@/icons/svg/arrow-right.svg'
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react'
import { ScrollViewWapper } from './style'
interface ScrollViewProps {
  children : React.ReactNode,
  scrollChildrenClassName : string,
  displacementsize? : string,
  selectorType? : 'id' | 'class' | 'element',
  flexshaking? : 0 | 1
}
const ScrollView = memo(forwardRef<HTMLDivElement , ScrollViewProps>(({ 
  children ,
  scrollChildrenClassName,
  displacementsize = '0 -8px',
  selectorType = 'class', 
  flexshaking
}, ref) => {
  const [ showRightIcon , setShowRightIcon ] = useState(false)
  const [ showLeftIcon , setShowLeftIcon ] = useState(false)
  const [ positionIndex , setPositionIndex ] = useState(0)
  const cacheTotalDistance = useRef(0)
  const scrollContentRef = useRef<HTMLDivElement>(null)
  
  const [offsetLeft , setOffset] = useState(0)
  
  const selectorHandle = useMemo(() => {
    const newScrollChildrenClassName = scrollChildrenClassName.replace(/\^(#|.)/,'')
    switch (selectorType) {
      case 'class':
        return `.${newScrollChildrenClassName}` 
      case 'id':
        return `#${newScrollChildrenClassName}`
      case 'element':
        return `${newScrollChildrenClassName}` 
      default: newScrollChildrenClassName
        break;
    }
  } , [selectorType])
  
  useEffect( () => {
    const scrollWidth = scrollContentRef.current!.scrollWidth
    const scrollClientWidth = scrollContentRef.current!.clientWidth    
    const  totalDistance = scrollWidth - scrollClientWidth
    cacheTotalDistance.current = totalDistance
    setShowRightIcon(cacheTotalDistance.current > offsetLeft)
  } , [children])
  
  const controlClickHandle = (isRight : boolean) => {
    
    const { scrollWidth ,clientWidth } = scrollContentRef.current!
    const currentIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const scrollContentAll = scrollContentRef.current?.querySelectorAll(selectorHandle!) || []
    const currentTabItem = scrollContentAll[currentIndex] as HTMLElement

    const currentOffseteft = currentTabItem.offsetLeft
    
    // 重新计算一下距离 ， 保证不出现计算失误
    cacheTotalDistance.current = (scrollWidth - clientWidth)

    setOffset(currentOffseteft)

    setPositionIndex(currentIndex)
    
    setShowRightIcon(cacheTotalDistance.current > currentOffseteft)
    
    setShowLeftIcon(currentOffseteft > 0)
  }
  
  return (
    <ScrollViewWapper className='ScrollViewWapper' ref={ref} displacementsize={displacementsize} flexshaking={flexshaking}  >
      { showLeftIcon && <div className='leftIcon' onClick={() => controlClickHandle(false)}> <LeftIcon/></div>}
      <div className='scroll-content-hidden'>
        <div className='scroll-content' ref={scrollContentRef} style={{transform : `translate(-${offsetLeft}px)` }}>
          {children} 
        </div>
      </div>
      { showRightIcon && <div className='rightIcon' onClick={() => controlClickHandle(true)}><RightIcon/></div>}
    </ScrollViewWapper> 
  )
}))

export default ScrollView