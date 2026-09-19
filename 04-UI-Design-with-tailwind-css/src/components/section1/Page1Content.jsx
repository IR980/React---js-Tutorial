import React from 'react'
import LeftText from './LeftText'
import RightImages from './RightImages'

const Page1Content = (props) => {
    // console.log(props.users);
  return (
    <div className='flex items-center justify-between pb-10 px-7 h-[90vh] gap-7'>
        <LeftText/>
        <RightImages users={props.users}/>
    </div>
  )
}

export default Page1Content