import React,{useEffect, useState} from 'react'
import CarStructure from '../../CarStructure'

function ViewCars() {
 
  const [cars ,setCars] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/cars') 
    .then(data => data.json())
    .then(data => setCars(data)) 
  }, [])
  return ( 
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {cars.map((car) => { 
          return <CarStructure key={car.id} car={car} />
        })}
      </div>
    </div>
  </div>
  )
}

export default ViewCars