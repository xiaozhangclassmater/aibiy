import PictureBrowser from '@/components/PictureBrowser'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { DetailPictureWapper } from './style'

const DetailPicture = memo(() => {
  const { detailInfo } = useSelector((state: storeStateType) => state.DetailModule)
  const [showPictureBrowser, setShowPictureBrowser] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const showImagePreView = (url: string) => {
    setShowPictureBrowser(true)
    setCurrentImage(url)
  }
  return (
    <DetailPictureWapper className='DetailPictureWapper'>
      <div className='pictures'>
        <div className='picture-left' onClick={() => showImagePreView(detailInfo!.picture_urls![0])}>
          <img src={detailInfo!.picture_urls![0]} alt="" />
          <div className="mask"></div>
        </div>
        <div className='picture-right'>
          {detailInfo.picture_urls?.slice(1, 5).map(item => {
            return (
              <div className='right-item' key={item} onClick={() => showImagePreView(item)}>
                <img src={item} alt="" />
                <div className="mask"></div>
              </div>
            )
          })}
        </div>
      </div>
      {showPictureBrowser && <PictureBrowser pictures={detailInfo?.picture_urls || []} currentImage={currentImage} closePicturePreView={setShowPictureBrowser} />}
    </DetailPictureWapper>
  )
})

export default DetailPicture