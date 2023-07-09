import { memo } from 'react'
import DetailPictures from './components/DetailPictures'
import DetailImageWindow from './components/DetilImageWindow'
import { DetailWapper } from './style'
const Detail = memo(() => {
  return (
    <DetailWapper>
      <DetailPictures />
      <DetailImageWindow />
    </DetailWapper>
  )
})

export default Detail 