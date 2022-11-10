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
    <div className="h-full bg-gray-400 w-screen">
    <h1 className="text-center p-auto">Add Car</h1>
    <form className="p-2 p-auto m-auto grid sm:grid-cols-1 w-2/3">
      <div className="flex flex-col">
        <label>Category</label>
        <input  onChange={(e) => handleInput(e)} className="rounded-md" type="text" name="category" />
      </div>
      <div className="flex flex-col">
        <label>Model</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="model" />
      </div>
      <div className="flex flex-col">
        <label>seats</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="seats" />
      </div>
      <div className="flex flex-col">
        <label>Price</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="price"/>
      </div>
      <div className="flex flex-col">
        <label>Quantity</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="quantity"/>
      </div>
      <div className="flex flex-col">
        <label>Fuel type</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="fuel_type"/>
      </div>
      <div className="flex flex-col">
        <label>Year</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="year"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Transmission</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="transmission"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Front url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="front_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Back url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="back_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Side url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="side_url"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Inside url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="inside_url"/>
      </div>
      <div className="flex flex-col">
        <button
        onClick={handleNewCar}
         className="bg-gray-700 hover:bg-gray-800 w-36 text-white rounded-md"
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