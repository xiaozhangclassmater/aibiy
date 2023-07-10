import { ReactNode, memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWapper } from './style'
interface ScrollViewProps {
  children: ReactNode,
  selectorIndex: number
}
const ScrollView = memo((
  {
    children,
    selectorIndex = 0
  }: ScrollViewProps
) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const [maxoffset, setMaxOffset] = useState(0) // 两者最大的偏移量 可滚动距离
  const [currentOffsetIndex, setCurrentOffsetIndex] = useState(0)
  const [isContinueScroll, setisContinueScroll] = useState(true)
  const handelIconClick = (isRight: boolean) => {
    const newIndex = isRight ? currentOffsetIndex + 1 : currentOffsetIndex - 1

    if (newIndex < 0 || (!isContinueScroll && isRight)) return // 边界处理

    const TabAllList = getAllElements('item', 'class') // 获取conntentRef 下面的 所有 item 子节点

    const TabItem = TabAllList[newIndex] as HTMLDivElement // 获取下一个 准备滚动元素

    const TabItemOffsetLeft = TabItem.offsetLeft

    contentRef.current!.style.transform = `translateX(${-TabItemOffsetLeft}px)`

    setisContinueScroll(maxoffset > TabItemOffsetLeft) // 是否能继续滚动

    setCurrentOffsetIndex(newIndex)

  }
  // useEffect(() => {
  //   const TabAllList = getAllElements('item', 'class') // 获取conntentRef 下面的 所有 item 子节点
  //   const TabItem = TabAllList[selectorIndex] as HTMLDivElement // 获取下一个 准备滚动元素
  //   if (TabItem.getBoundingClientRect().right > contentRef.current!.clientWidth) {
  //     contentRef.current!.style.transform = `translateX(${-(TabAllList[currentOffsetIndex + 1] as HTMLDivElement).offsetLeft}px)`
  //     setCurrentOffsetIndex(currentOffsetIndex + 1)
  //   } else {

  //   }
  // }, [selectorIndex])

  const getAllElements = (querySelectorName: string, type: 'id' | 'class' | 'el' = 'class') => {
    let seletorName = null
    if (type === 'id') {
      seletorName = `#${querySelectorName.replace(/\^#/, '')}`
    } else if (type == 'class') {
      seletorName = `.${querySelectorName.replace(/\^./, '')}`
    } else {
      seletorName = `${querySelectorName.replace(/\^(.|#)/, '')}`
    }
    return contentRef.current!.querySelectorAll(seletorName)
  }

  function getScrollOffset() {
    const scrollWidth = contentRef.current!.scrollWidth
    const clientWidth = contentRef.current!.clientWidth
    setMaxOffset(scrollWidth - clientWidth)
  }
  useEffect(() => {
    getScrollOffset()
  }, [])
  return (
    <ScrollViewWapper>
      <div className='leftIcon' onClick={() => handelIconClick(false)}>左边</div>
      <div className='content-wapper-hidden'>
        <div className='render-content' ref={contentRef}>
          {children}
        </div>
      </div>
      <div className='rightIcon' onClick={() => handelIconClick(true)}>右边</div>
    </ScrollViewWapper>
  )
})

export default ScrollView