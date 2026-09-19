import React from 'react'
import RightCard from './RightCard'

const RightImages = (props) => {
    console.log(props.users);
  return (
    <div id='right' className='h-full flex flex-nowrap gap-6 w-3/4 p-5 overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem,idx){
            return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightImages