import React from 'react'


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/11194877/pexels-photo-11194877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
       </div>

       <div className='bg-gray-700 flex flex-col justify-center'>
           <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
               <h2 className='text-4xl text-gray-400 font-bold text-center'>LOG IN</h2>
               <div className='flex flex-col text-gray-400 py-2'>
                   <label>User Name</label>
                   <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
               </div>
               <div className='flex flex-col text-gray-400 py-2'>
                   <label>Password</label>
                   <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password"/>
               </div>
               <div className='text-gray-400'>
                   <p><input type="checkbox" /> Remember Me </p>
                   <p>Forgot Password</p>
               </div>
               <button className='text-gray-400'>LOG IN</button>
           </form>
       </div>
    </div>
  )
}
