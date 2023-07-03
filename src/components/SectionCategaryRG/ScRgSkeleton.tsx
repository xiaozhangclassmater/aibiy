import { memo } from 'react'
import AibiSkeleton from '../skeleton'
import { ScRgSkeletonWapper } from './style'

const ScRgSkeleton = memo(() => {
  return (
    <ScRgSkeletonWapper>
      <AibiSkeleton.TitleSkeleton size='large' />
      <AibiSkeleton.TitleSkeleton size='small'/>
        <div className='sksleton-card-wapper'>
          {(new Array(5).fill('').map(((item , index) => <AibiSkeleton.CardSkeleton width='20%' style={{ height : '100%' , width : '100%'}} key={index}/>)))}
        </div>
    </ScRgSkeletonWapper>
  )
})

export default ScRgSkeleton