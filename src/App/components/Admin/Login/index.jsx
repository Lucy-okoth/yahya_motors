import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Login() {
    const [login,setLogin] = useState({})
    const [admin,setAdmin] = useState([])
    const navigate = useNavigate()


    function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setLogin({...login, [name]: value})
    }

    function handleLogin(e) {
e.preventDefault()
    fetch("http://localhost:9292/admin")
    .then(res=>res.json())
    .then(data => setAdmin(admin => data))

const newAdmin = admin.filter(item=> item.username===login.username && item.password===login.password)
if(newAdmin.length <= 0){
    alert("please fill in correct credentials")
    navigate("/login")
}else {
    navigate("/admin")
}

    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/11194877/pexels-photo-11194877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
       </div>

       <div className='bg-gray-700 flex flex-col justify-center'>
           <form autoComplete="off" className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' >
               <h2 className='text-4xl text-gray-400 font-bold text-center'>LOG IN</h2>
               <div className='flex flex-col text-gray-400 py-2'>
                   <label>User Name</label>
                   <input onChange={(e)=>handleChange(e)} name="username" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
               </div>
               <div className='flex flex-col text-gray-400 py-2'>
                   <label>Password</label>
                   <input onChange={(e)=>handleChange(e)} name="password" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password"/>
               </div>
               <div className='text-gray-400'>
                 
               </div>
               <button onClick={(e)=>handleLogin(e)} className='p-3 rounded-md text-gray-400 bg-blue-600'>LOG IN</button>
           </form>
       </div>
    </div>
  )
}
