import { Skeleton } from 'antd'
import { useState } from 'react'
import { TabCardSkeletonWapper } from "../style"
interface TabCardSkeletonProps {
  active? : boolean
}
const TabCardSkeleton = ( { active = false } : TabCardSkeletonProps) => {
  const [ skeletons ] = useState<string[]>(new Array(8).fill(''))
  return (
    <TabCardSkeletonWapper>
     {skeletons.map((item , index) => <Skeleton.Button active={active} size='large' key={index}></Skeleton.Button>)}
    </TabCardSkeletonWapper>
  )
}

export default TabCardSkeleton