import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="w-full h-[90vh] top[90px] bg-[url('https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-supercar.jpg')]">
      <div className='w-full h-[90%] flex flex-col  text-white px-4'>
        <h1 className='text-5xl font-bold text-white'>
          DRIVING TOMORROW TODAY
        </h1>
      </div>
      <div className='8 opacity-100	 w-24 ml-8'>
        <Link className="text-center text-white	" to="cars"> SHOP NOW </Link>
      </div>
    </div>
    

  )
}

export default Home