import React,{useEffect, useState} from 'react'
function AddCar() {
const [carData,setCarData] = useState({})
  function handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    setCarData({ ...carData, [name]: value });
  }
  function handleNewCar() {
    console.log(carData)
    fetch("http://localhost:9292/add_car", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((res) => res.json())
      .then((data) => alert("car added sucessfull ", data))
  }
  const models ="bg-violet-300 rounded-md hover:bg-violet-600 text-red-600";
  return (
    <div className="h-full bg-indigo-200 ">
    <h1 className="text-center p-auto text-4xl">Add Car</h1>
    <form className="p-2 p-auto m-auto grid sm:grid-cols-2 gap-4  w-full items-center">
      <div className="flex flex-col">
        <label className='text-4xl'>Category</label>
        <input  onChange={(e) => handleInput(e)} className="rounded-md p-3" type="text" name="category" />
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>Model</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="model" />
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>seats</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="seats" />
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>Price</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="price"/>
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>Quantity</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="quantity"/>
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>Fuel type</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="fuel_type"/>
      </div>
      <div className="flex flex-col">
        <label className='text-4xl'>Year</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md p-3" type="text" name="year"/>
      </div>
      <div className="flex flex-col mb-4">
        <label className='text-4xl'>Transmission</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md p-3' name="transmission"/>
      </div>
      <div className="flex flex-col mb-4">
        <label className='text-4xl'>Front url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md p-3' name="front_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label className='text-4xl'>Back url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md p-3' name="back_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label className='text-4xl'>Side url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md p-3' name="side_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label className='text-4xl'>Inside url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md p-3' name="inside_url"/>
      </div>
      <div className="flex flex-col">
        <button
        onClick={handleNewCar}
         className="bg-gray-700 hover:bg-gray-800 w-36 text-white rounded-md p-3"
          type="button"
          data-modal-toggle="popup-modal">
          Add Car
        </button>
      </div>
    </form>
  </div>
  )
}
export default AddCar