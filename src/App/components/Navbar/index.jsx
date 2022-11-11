import React from 'react'
import { Link } from 'react-router-dom'


function NavBar (){
  return (
    <div className='w-full float h-[60px] bg-black'>
        <div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
            <h1 className='text-[#fff]'>YAHYA MOTORS</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex flex-row text-white items-center p-3'>
                <li className='p-2'><Link to="/">Home</Link></li>
                <li className='p-2'><Link to="/cars">Cars</Link></li>
                <li className='p-2'><Link to="/login">Admin</Link></li>
                
                
            </ul>
        </div>

 
        </div>
    </div>

  )
  }

export default NavBar