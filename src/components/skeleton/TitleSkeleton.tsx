import { Skeleton } from 'antd'
import { size } from '.'
interface TitleSkeletonProps {
  style? : React.CSSProperties,
  size?: size
}
export default function TitleSkeleton({ style , size } : TitleSkeletonProps) {
  return (
    <>
    <Skeleton.Button block  size={size} style={style}/>
    </>
  )
}
