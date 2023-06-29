import { Skeleton } from "antd"
import { size } from ".."
import { RoomItemSkeltonWapper } from "../style"
interface RoomItemSkeletonProps {
  size? : size
  active? : boolean,
  style? : React.CSSProperties
  imageStyle? : React.CSSProperties 
}
const RoomItemSkt = ({ 
  size = 'small' ,
  active = false ,
  style ,
  imageStyle = {
    width:'246px',
    height:'163px'
  }
  }:RoomItemSkeletonProps) => {
  return (
   <RoomItemSkeltonWapper style={style}>
      <Skeleton.Image active={active} style={imageStyle} />
      <Skeleton.Button  className="skeleton-button" style={{  width:'200px'}} size={size} active={active} />
      <Skeleton.Button className="skeleton-button" style={{  width:'246px'}} size={size} active={active}  />
      <Skeleton.Button className="skeleton-button" style={{  width:'246px'}} size={size} active={active}  />
   </RoomItemSkeltonWapper>
  )
}

export default RoomItemSkt