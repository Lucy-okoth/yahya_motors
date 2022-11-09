import React,{useState} from 'react'
function AddCar() {
const [carData,setCarData] = useState({})
  function handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    setCarData({ ...carData, [name]: value });
    console.log(carData);
  }
  function handleNewCar() {
    console.log(carData)
  }
  const models = "bg-violet-300 rounded-md hover:bg-violet-600 text-red-600";
  return (
    <div className="h-screen bg-gray-400 w-screen">
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
        <label>price</label>
        <input onChange={(e) => handleInput(e)}  className="rounded-md" type="text" name="price"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>Transmission</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="description"/>
      </div>
      <div className="flex flex-col mb-4">
        <label>image url</label>
        <input onChange={(e) => handleInput(e)}  className='rounded -md' name="description"/>
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