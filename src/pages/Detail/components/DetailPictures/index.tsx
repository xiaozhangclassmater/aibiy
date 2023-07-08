import { memo } from 'react'
import { useSelector } from 'react-redux'
import { DetailPictureWapper } from './style'

const DetailPicture = memo(() => {
  const { detailInfo } = useSelector((state: storeStateType) => state.DetailModule)
  return (
    <DetailPictureWapper className='DetailPictureWapper'>
      <div className='children'>
        <div className='picture-left'>
          <img src={detailInfo!.picture_urls![0]} alt="" />
          <div className="mask"></div>
        </div>
        <div className='picture-right'>
          {detailInfo.picture_urls?.slice(1, 5).map(item => {
            return (
              <div className='right-item' key={item}>
                <img src={item} alt="" />
                <div className="mask"></div>
              </div>
            )
          })}
        </div>
      </div>
    </DetailPictureWapper>
  )
})

export default DetailPicture