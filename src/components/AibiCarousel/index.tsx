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
  const [showMask, setShowMask] = useState(false)
  const [selectorIndex, setSelectorIndex] = useState(0)
  const carouselRef = useRef<CarouselRef>(null)
  const roomItemVieportRef = useRef<HTMLDivElement>(null)
  const defaultSvgStyle: React.CSSProperties = { height: '20px', width: '20px', fill: '#fff' }
  const { elRef, isActive } = useLazyLoad<HTMLImageElement>(() => { }, {
    root: roomItemVieportRef.current,
    threshold: 0

  })
  // console.log('isActive', isActive);、
  const swiperEnter = () => {
    setShowMask(true)
  }
  const swiperLeave = () => {
    setShowMask(false)
  }
  const changeImage = (isNext: boolean) => {
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
  return (
    <AibiCarouselWapper className='AibiCarouselWapper' ref={roomItemVieportRef} >
      {/* dots={{className : 'image-poiter'}} */}
      <Carousel dots={false} className='carousel' ref={carouselRef}>
        {swiperList.map((item, index) => {
          return (
            <div key={index} className='carousel-item' ref={elRef} onMouseEnter={() => swiperEnter()} onMouseLeave={() => swiperLeave()}>
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
        <div className='mask'>
          <div className='left' onClick={() => changeImage(false)} ><LeftIconSvg style={defaultSvgStyle} /></div>
          <div className='right' onClick={() => changeImage(true)}><RightIconSvg style={defaultSvgStyle} /></div>
        </div>
      }
    </AibiCarouselWapper>
  )
})

export default AibiCarousel
