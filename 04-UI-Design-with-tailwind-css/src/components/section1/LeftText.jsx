import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
const LeftText = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between rounded-4xl'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftText