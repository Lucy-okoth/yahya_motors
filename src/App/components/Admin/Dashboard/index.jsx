import React from 'react'
import Sidebar from './SideBar'


function Dashboard() {
  return (
    <div className= "grid grid-cols-6 w-screen gap-2  bg-[url('https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-supercar.jpg')]">
<Sidebar />
<div className='cols-span-4 h-screen bg-slate-50'>

</div>
    </div>
    
  )
}

export default Dashboard