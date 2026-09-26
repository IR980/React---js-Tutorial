import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-900 text-white p-5 flex justify-between items-start'>
        <h3 className='text-3xl font-bold'>Sheryians</h3>
        <div className='flex gap-10 justify-between items-start text-2xl font-bold'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='/product'>Product</Link>
            
        </div>
    </div>
  )
}

export default Navbar