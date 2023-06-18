import { memo } from 'react'
import AibiHeaderCenter from './components/AibiHeaderCenter'
import AibiHeaderLeft from './components/AibiHeaderLeft'
import AibiHeaderRight from './components/AibiHeaderRight'
import AibiHeaderWrapper from './style'
const AibiHeader = memo(() => {

  return (
    <AibiHeaderWrapper>
      <AibiHeaderLeft />
      <AibiHeaderCenter />
      <AibiHeaderRight />
    </AibiHeaderWrapper>
  )
})

export default AibiHeader