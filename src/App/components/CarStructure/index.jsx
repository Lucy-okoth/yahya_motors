import React from 'react'

function CarStructure({car}) {
  return (
  <a key={car.id} href={car.id} className="group">
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img
        src={car.front_url}
        alt={"alternative"}
        className="h-36 w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{car.model}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{car.price}</p>
  </a>
  )
}

export default CarStructure