import { Skeleton } from "antd"
import { size } from ".."
import { RoomItemSkeltonWapper } from "../style"
interface RoomItemSkeletonProps {
  size? : size
  active? : boolean,
  style? : React.CSSProperties
  imageStyle? : React.CSSProperties,
  buttonWidths? : number[]
}
const RoomItemSkt = ({ 
  size = 'small' ,
  active = false ,
  style ,
  imageStyle = {
    width:'246px',
    height:'163px'
  },
  buttonWidths = [200 , 246 , 246]
  }:RoomItemSkeletonProps) => {
  return (
   <RoomItemSkeltonWapper style={style}>
      <Skeleton.Image active={active} style={imageStyle} />
      <Skeleton.Button  className="skeleton-button" style={{width:`${buttonWidths[0]}px`}} size={size} active={active} />
      <Skeleton.Button className="skeleton-button" style={{width:`${buttonWidths[1]}px`}} size={size} active={active}  />
      <Skeleton.Button className="skeleton-button" style={{width:`${buttonWidths[2]}px`}} active={active}  />
   </RoomItemSkeltonWapper>
  )
}

export default RoomItemSkt