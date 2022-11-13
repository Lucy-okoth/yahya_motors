import React from 'react'
import { Link } from 'react-router-dom'


function NavBar (){
  return (
    <div className='w-screen h-[60px] bg-black mb-2'>
        <div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
            <h1 className='text-[#fff]'>YAHYA MOTORS</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex flex-row text-white items-center p-3'>
                <li className='p-2 rounded-xl hover:border-2 hover:border-white'><Link to="/">Home</Link></li>
                <li className='p-2 rounded-xl hover:border-2 hover:border-white'><Link to="/cars">Cars</Link></li>
                <li className='p-2 rounded-xl hover:border-2 hover:border-white'><Link to="/login">Admin</Link></li>
                <li className='p-2 rounded-xl hover:border-2 hover:border-white'><Link to="/admin">dashboard</Link></li>
                
            </ul>
        </div>

 
        </div>
    </div>

  )
  }

export default NavBar