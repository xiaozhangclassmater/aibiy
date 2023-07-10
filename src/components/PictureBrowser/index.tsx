import { setBodyStyle } from '@/utils'
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IndiCator from '../Indicator'
import { PictureBrowserWapper } from './style'
interface PictureBrowserProps {
  pictures: string[],
  currentImage?: string,
  closePicturePreView: (showPictureBrowser: boolean) => void
}

const PictureBrowser = memo((
  { pictures, closePicturePreView }: PictureBrowserProps
) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isright, setisRight] = useState(false)
  const [showTabs, setShowTabs] = useState(true)
  useEffect(() => {
    setBodyStyle('overflow', 'hidden')
    return () => {
      setBodyStyle('overflow', 'auto')
    }
  }, [])
  const leftIconClickHandle = () => {
    setisRight(false)
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex < 0 ? pictures.length - 1 : currentIndex - 1)
  }
  const rightIconClickHandle = () => {
    setisRight(true)
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex > pictures.length - 1 ? 0 : currentIndex + 1)
  }
  const setShowCurrentImage = (index: number) => {
    setisRight(index > currentIndex)
    setCurrentIndex(index)
  }
  return (
    <PictureBrowserWapper className='PictureBrowserWapper' isright={isright ? String(isright) : undefined} >
      <div className="top" onClick={() => closePicturePreView(false)}>
        <CloseOutlined />
      </div>
      <div className="center">
        <div className='left-icon' onClick={() => leftIconClickHandle()}>
          <LeftOutlined />
        </div>
        <div className="content">
          <SwitchTransition>
            <CSSTransition timeout={200} key={pictures[currentIndex]} classNames={'pictrue'}>
              <img src={pictures[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className='rightt-icon' onClick={() => rightIconClickHandle()}>
          <RightOutlined />
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className='line-info'>
            <div className='hidden' onClick={() => setShowTabs(!showTabs)}>{showTabs ? '隐藏选项卡' : '打开选项卡'} </div>
          </div>
          {
            showTabs && <div className="scroll-images">
              <IndiCator selectorIndex={currentIndex} querySeletorClassName='picture-item' >
                {
                  pictures.map((item, index) => {
                    return (
                      <div className='picture-item' key={index} onClick={() => setShowCurrentImage(index)}>
                        <img src={item} alt="" />
                        <div className={classNames('mask', currentIndex === index ? 'mask-active' : '')}></div>
                      </div>
                    )
                  })
                }
              </IndiCator>
            </div>
          }
        </div>
      </div>
    </PictureBrowserWapper>
  )
})

export default PictureBrowser