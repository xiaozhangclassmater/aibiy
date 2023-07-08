import { LeftOutlined } from '@ant-design/icons'
import { memo } from 'react'
import DetailPictures from './components/DetailPictures'
import DetailImageWindow from './components/DetilImageWindow'
import { DetailWapper } from './style'
const Detail = memo(() => {
  return (
    <DetailWapper>
      <div className='tab'>
        <div className='back'>
          <LeftOutlined className='icon' style={{ width: 50, height: 52 }} onClick={() => history.back()} />
        </div>
        返回
      </div>
      <DetailPictures />
      <DetailImageWindow />
    </DetailWapper>
  )
})

export default Detail 