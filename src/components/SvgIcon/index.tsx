// Icon.tsx
import React, { useEffect, useState } from "react";


interface Props {
  iconName: string;
  width?: string
  height?: string;
  color?: string;
}
// iconName

const SvgIcon: React.FC<Props> = ({ iconName ,  width = "1em", height = "1em", color = "currentColor" }) => {
  const [ icon , setIcon ] = useState<React.LazyExoticComponent<React.ComponentType<any>>>()
  useEffect( () => {
    const SvgComponent = require(`@/icons/svg/${iconName}.svg`);
    console.log(SvgComponent);
    setIcon(SvgComponent)
  } , [iconName])
  console.log(icon);
  
  return (
    <div style={{width , height , color}}>

    </div>

    
  )
};

export default React.memo(SvgIcon);
 