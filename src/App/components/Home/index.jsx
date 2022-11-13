import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="h-screen sm:grid-cols-2 flex flex-col justify-center bg-[url('https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-supercar.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="cols-span-2 p-11 p-auto">
      <div className='mb-6'>
        <h1 className='sm:pl-4 text-2xl font-bold text-white'>
          DRIVING TOMORROW TODAY
        </h1>
      </div>
      <div className='8 opacity-100 sm:ml-36'>
        <Link className="text-center text-white bg-cyan-900 p-5 rounded hover:bg-white hover:text-black" to="cars"> SHOP NOW </Link>
      </div>
      </div>
    </div>
    

  )
}

export default Home