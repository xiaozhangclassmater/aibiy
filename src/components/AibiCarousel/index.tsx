import { ReactComponent as LeftIconSvg } from '@/icons/svg/arrow-left.svg'
import { ReactComponent as RightIconSvg } from '@/icons/svg/arrow-right.svg'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { memo, useRef, useState } from 'react'
import IndiCator from '../Indicator'
import { AibiCarouselWapper } from './style'
// import  * as _ from 'loadsh'
interface AibiCarouselProps {
  swiperList: string[]
}
const AibiCarousel = memo(({
  swiperList = []
}: AibiCarouselProps
) => {
  const [showMask, setShowMask] = useState(false)
  const [selectorIndex, setSelectorIndex] = useState(0)
  const carouselRef = useRef<any>(null)
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '230px',
    color: '#fff',
    lineHeight: '230px',
    textAlign: 'center',
    background: '#364d79',
  };
  const defaultSvgStyle: React.CSSProperties = { height: '20px', width: '20px', fill: '#fff' }
  const swiperEnter = () => {

    setShowMask(true)
  }
  const swiperLeave = () => {
    setShowMask(false)
  }
  const changeImage = (isNext: boolean) => {
    let newIndex = isNext ? selectorIndex + 1 : selectorIndex - 1
    isNext ? carouselRef.current!.next() : carouselRef.current!.prev()
    const length = swiperList.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectorIndex(newIndex)
  }
  return (
    <AibiCarouselWapper>
      {/* dots={{className : 'image-poiter'}} */}
      <Carousel dots={false} ref={carouselRef} >
        {swiperList.slice(0, 3).map((item, index) => {
          return (
            <div key={index} onMouseEnter={() => swiperEnter()} onMouseLeave={() => swiperLeave()}>
              <h3 style={contentStyle}>
                <img src={item} alt="" />
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
