import { memo } from 'react'
import AibiCenter from './components/AibiHeaderCenter'
import AibiLeft from './components/AibiHeaderLeft'
import AibiRight from './components/AibiHeaderRight'
import AibiHeaderWrapper from './style'
const AibiHeader = memo(() => {

  return (
    <AibiHeaderWrapper>
      <AibiLeft />
      <AibiCenter />
      <AibiRight />
    </AibiHeaderWrapper>
  )
})

export default AibiHeader