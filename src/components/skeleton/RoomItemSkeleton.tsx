import { Skeleton } from "antd"
import { size } from "./"
import { RoomItemSkeltonWapper } from "./style"
interface RoomItemSkeletonProps {
  size? : size
  active? : boolean
}
const RoomItemSkt = ({ size = 'small' , active = false }:RoomItemSkeletonProps) => {
  return (
   <RoomItemSkeltonWapper>
      <Skeleton.Image active={active} style={{  width:'246px',height:'163px'}} />
      <Skeleton.Button className="skeleton-button" style={{  width:'200px'}} size="small" active={active} />
      <Skeleton.Button className="skeleton-button" style={{  width:'246px'}} active={active}  />
      <Skeleton.Button className="skeleton-button" style={{  width:'246px'}} active={active}  />
   </RoomItemSkeltonWapper>
  )
}

export default RoomItemSkt