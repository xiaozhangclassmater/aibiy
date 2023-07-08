import { ReactNode, memo, useEffect, useRef } from 'react'
import { IndiCatorWapper } from './style'

interface IndiCatorProps {
  selectorIndex: number,
  children: ReactNode,
  querySeletorClassName?: string
}
/**
 * 指示器 设计方案
 * 
 * 1 ： 指示器的内容 应该是 children 传入 
 * 2 ： 考虑指示器的滚动位置 ，计算公式  (当前元素 offsetLeft + 当前元素 width * 0.5)  - ( 显示指示器内容的盒子宽度 * 0.5)
 *  
 * 3 ： 边界处理 如果是 大于 总数 则回到第 0 位 ， 如果是 小于0 则 等于 0
 */
const IndiCator = memo(({
  selectorIndex = 0,
  querySeletorClassName = 'item',
  children
}: IndiCatorProps
) => {
  const contnetRef = useRef<HTMLDivElement>(null)
  const computedIndiCatorPosition = () => {
    if (!contnetRef.current) return
    const indiCatorContents = contnetRef.current!.querySelectorAll(`.${querySeletorClassName}`)
    const indiCatorItem = indiCatorContents[selectorIndex] as HTMLDivElement
    const itemOffsetLeft = indiCatorItem.offsetLeft // 每一个子项 offsetLeft 位置
    const contentScrollWidth = contnetRef.current.scrollWidth
    const itemClientWidth = indiCatorItem.clientWidth // 每一个 子项 item 宽度
    const contentClientWidth = contnetRef.current.clientWidth  // 内容盒子 宽度
    let distance = ((itemOffsetLeft + itemClientWidth * 0.5) - contentClientWidth * 0.5)
    if (distance < 0) distance = 0 // 左边边界处理
    const totalDistance = contentScrollWidth - contentClientWidth
    if (distance > totalDistance) distance = totalDistance // 右边 边界处理
    contnetRef.current.style.transform = `translateX(${-distance}px)`
  }
  useEffect(() => {
    computedIndiCatorPosition()
  })
  return (
    <IndiCatorWapper className='IndiCator-wapper'>
      <div className='visualArea-width'>
        <div className='IndiCator-content' ref={contnetRef}>
          {children}
        </div>
      </div>
    </IndiCatorWapper>
  )
})

export default IndiCator