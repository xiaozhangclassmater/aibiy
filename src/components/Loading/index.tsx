import { Spin } from 'antd'
import { memo } from 'react'
import { LoadingWapper } from './style'
const Loading = memo(() => {
  
  return (
    <LoadingWapper>
      <Spin size='large'/>
    </LoadingWapper>
  )
})


export default Loading