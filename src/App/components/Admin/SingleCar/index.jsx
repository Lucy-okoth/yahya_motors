import { useParams } from "react-router-dom";
import React from 'react'
function SingleCar() {
const carId = useParams();
console.log(carId)
  return (
    <div>this is a single car</div>
  )
}

export default SingleCar