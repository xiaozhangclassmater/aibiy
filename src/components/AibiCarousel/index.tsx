import useLazyLoad from '@/hooks/modules/useLazyLoad'
import { ReactComponent as LeftIconSvg } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIconSvg } from '@/icons/svg/arrow-right.svg'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import classNames from 'classnames'
import { memo, useRef, useState } from 'react'
import IndiCator from '../Indicator'
import { AibiCarouselWapper } from './style'
interface AibiCarouselProps {
  swiperList: string[]
}
const AibiCarousel = memo(({
  swiperList = []
}: AibiCarouselProps
) => {
  const [selectorIndex, setSelectorIndex] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)
  const roomItemVieportRef = useRef<HTMLDivElement>(null)
  const defaultSvgStyle: React.CSSProperties = { height: '20px', width: '20px', fill: '#fff' }
  const [showMask, setShowMask] = useState(false)
  const { elRef } = useLazyLoad<HTMLImageElement>(() => { }, {
    root: roomItemVieportRef.current,
    threshold: 0

  })
  const changeImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isNext: boolean) => {
    e.stopPropagation()
    let newIndex = null
    const length = swiperList.length
    if (isNext) {
      newIndex = selectorIndex + 1
      carouselRef.current!.next()
    } else {
      newIndex = selectorIndex - 1
      carouselRef.current!.prev()
    }
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectorIndex(newIndex)
  }
  const swiperOperation = (isLeave: boolean) => {
    setShowMask(isLeave ? false : true)
  }
  return (
    <AibiCarouselWapper className='AibiCarouselWapper' ref={roomItemVieportRef} onMouseEnter={() => swiperOperation(false)} onMouseLeave={() => swiperOperation(true)}  >
      {/* dots={{className : 'image-poiter'}} */}
      <Carousel dots={false} className='carousel' ref={carouselRef}>
        {swiperList.slice(0, 5).map((item, index) => {
          return (
            <div key={index} className='carousel-item' ref={elRef}>
              <h3 className='carousel-confianer'>
                <img src={item} alt="" className='image' />
              </h3>
            </div>
          )
        })}
      </Carousel>
      <IndiCator selectorIndex={selectorIndex} querySeletorClassName={'dot'}>
        {
          swiperList?.length && swiperList.map((item, index) => {
            return (
              <div className='dot' key={index}>
                <span className={classNames('point', { 'active': index === selectorIndex })}></span>
              </div>
            )
          })
        }
      </IndiCator>
      {
        showMask && <div className='mask'>
          <div className='left' onClick={(e) => changeImage(e, false)}><LeftIconSvg style={defaultSvgStyle} /></div>
          <div className='right' onClick={(e) => changeImage(e, true)}><RightIconSvg style={defaultSvgStyle} /></div>
        </div>
      }
    </AibiCarouselWapper>
  )
})

export default AibiCarousel
