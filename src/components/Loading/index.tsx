import { Spin } from 'antd'
import { memo } from 'react'
import { LoadingWapper } from './style'
interface LoadingProps {
  fullScreen? : boolean
}
const Loading = memo(( { fullScreen = true } : LoadingProps ) => {
  const fullScreenLoadingStyle : React.CSSProperties = {
    position : 'fixed',
    top : 0,
    left : 0,
    bottom : 0,
    right : 0,
    backgroundColor : 'rgba(255,255,255,.5)'
  }
  return (
    <LoadingWapper style={fullScreen ? fullScreenLoadingStyle : {}} >
      <Spin size='large'/>
    </LoadingWapper>
  )
})


export default Loading