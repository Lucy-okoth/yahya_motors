import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function SingleCar() {
  const carid = useParams()
  const [showModal, setShowModal] = useState(false);
  const [carData, setCarData] = useState({});
  const [updateInfo,setUpdateInfo] = useState({id: carid.id});

useEffect(()=>{
  fetch(`http://localhost:9292/cars/${carid.id}`)
     .then(response => response.json())
     .then(data => setCarData(carData => data));
},[])


function handleChange(e) {
  const name = e.target.name
  const value = e.target.value
setUpdateInfo({...updateInfo,[name]: value})
}

function handleUpdate() {
  console.log(updateInfo)
  console.log(carData.id)
}


  return (
    <div className="h-screen w-11/12 m-auto p-2">
      <p className="h-6 bg-red-600"></p>
      <div className="ml-3 h-20 text-white py-2 py-auto">
        <img
          className="h-12"
          src={carData.front_url}
          alt={carData.model}
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="p-4 col-span-4 sm:col-span-3">{`${carData.year} ${carData.category} ${carData.model}`}</div>
        <div className="p-4 sm:col-span-1">Price:{carData.price}</div>
      </div>
      <div className="w-full h-52 grid grid-cols-3 gap-2">
        <div className="border border-slate-100 col-span-4 sm:col-span-2">
          <Carousel>
            <div>
              <img
                alt="hundra"
                src={carData.side_url}
              />
            </div>
            <div>
              <img
                alt={carData.model}
                src={carData.back_url}
              />
            </div>
            <div>
              <img
                alt={carData.model}
                src={carData.inside_url}
              />
            </div>
            <div>
              <img
                alt={carData.model}
                src={carData.front_url}
              />
            </div>
          
          </Carousel>
        </div>
        <div className="col-span-4 sm:col-span-1 py-6 py-auto">
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3 pb-3">Category:</span>
            <span>{carData.category}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Model:</span>
            <span>{carData.model}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Price:</span>
            <span>{carData.price}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Seats:</span>
            <span>{carData.seats}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Transmission:</span>
            <span>{carData.transmission}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Year:</span>
            <span>{carData.year}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Fuel:</span>
            <span>{carData.fuel_type}</span>
          </div>
          <div className="border border-slate-400 m-2 justify-between rounded-md">
            <span className="ml-3 mr-3">Quantity:</span>
            <span>{carData.quantity}</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 bg-sky-600 rounded p-1">
            Update
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center  bg-theme items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4 ">
            <div className="relative sm:w-3/4 mx-auto">
              <div className="border-0 bg-slate-100 sm:rounded-lg shadow-lg relative flex flex-col sm:h-3/4 w-screen sm:w-full  outline-none focus:outline-none">
                <div className="flex text-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <p className="text-center font-bold">Update car details</p>
                </div>
                {/*body*/}
                <div className="relative flex-row flex-auto p-5  p-auto m-auto justify-around">
                <div className="flex flex-row justify-around m-2">
                    <label className="text-black font-bold pr-1">Id:</label>
                    <input className="border bg-gray-200 rounded-md" name="price" onChange={(e)=>handleChange(e)} value={carData.id} ></input>
                  </div>
                  <div className="flex flex-row justify-around m-2">
                    <label className="text-black font-bold pr-1">Price:</label>
                    <input className="border bg-gray-200 rounded-md" name="price" onChange={(e)=>handleChange(e)} ></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold">Fuel:</label>
                    <input className="text-black border bg-gray-200 rounded-md" name="fuel_type" onChange={(e)=>handleChange(e)}  ></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold">Year:</label>

                    <input className="text-black border bg-gray-200 rounded-md" name="year" onChange={(e)=>handleChange(e)} ></input>
                  </div>
                  <div className=" flex flex-row justify-around pr-1 m-2">
                    <label className="text-black pr-1 font-bold">Model:</label>

                    <input className="text-black border bg-gray-200 rounded-md" name="model" onChange={(e)=>handleChange(e)} ></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Seats:</label>
                    <input className="text-black border bg-gray-200 rounded-md" name="seats" onChange={(e)=>handleChange(e)} ></input>
                  </div>
                </div>
                <div className="flex items-center justify-around p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-800 bg-red-200 background-transparent px-6 py-2 text-xs rounded p-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-700 hover:text-white"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button
                  onClick={handleUpdate}
                    className="bg-blue-500 text-white background-transparent hover:text-white hover:bg-blue-700 opacity-100 text-xs p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default SingleCar;