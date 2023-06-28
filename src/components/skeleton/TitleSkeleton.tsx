import { Skeleton } from 'antd'
interface TitleSkeletonProps {
  style? : React.CSSProperties
}
export default function TitleSkeleton({ style } : TitleSkeletonProps) {
  return (
    <>
    <Skeleton.Button  size='large' style={style}/>
    </>
  )
}
