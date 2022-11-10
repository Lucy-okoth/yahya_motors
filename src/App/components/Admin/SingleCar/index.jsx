

import React, { useState } from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function SingleCar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen w-11/12 m-auto p-2">
      <p className="h-6 bg-red-600"></p>
      <div className="ml-3 h-20 text-white py-2 py-auto">
        <img
          class="h-12"
          src="https://www.1000islandstoyota.com/uploads/config/1000_islands__non_standard_rgb_nss.png"
          alt="Toyota"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="p-4 col-span-4 sm:col-span-3">2022 Toyota Hundra</div>
        <div className="p-4 sm:col-span-1">Price:$56000</div>
      </div>
      <div className="w-full h-52 grid grid-cols-3 gap-2">
        <div className="border border-slate-100 col-span-4 sm:col-span-2">
          <Carousel>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/0bd9883bddfbd5e79439a2afa370abeb.jpg"
              />
            </div>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/5d9dc734fe507839658839858399088f.jpg"
              />
            </div>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/8b081af12af2f7e6deae02b06ca6aa5c.jpg"
              />
            </div>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/77ef7514ae071564e649118f9a3f0b0d.jpg"
              />
            </div>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/e74bbf90e9477e6e983dc2cb94bc66e6.jpg"
              />
            </div>
            <div>
              <img
                alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/241e746056f233073307679f481d3a30.jpg"
              />
            </div>
          </Carousel>
        </div>
        <div className="col-span-4 sm:col-span-1 py-6 py-auto">
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3 pb-3">Category:</span>
            <span>Toyota</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Model:</span>
            <span>Hundra</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Price:</span>
            <span>$56000</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Seats:</span>
            <span>5</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Transmission:</span>
            <span>Manual</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Year:</span>
            <span>2022</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Fuel:</span>
            <span>Diesel</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Quantity:</span>
            <span>7</span>
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
              <div className="border-0 bg-slate-100 opacity-75 sm:rounded-lg shadow-lg relative flex flex-col sm:h-3/4 w-screen sm:w-full  outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1 className="text-center font-bold">Update car details</h1>
                </div>
                {/*body*/}
                <div className="relative flex-row flex-auto p-3  p-auto m-auto justify-around">
                  <div className="flex flex-row justify-around">
                    <label className="text-black font-bold pr-1">Price:</label>
                    <input className="border border-gray-200 rounded-md"></input>
                  </div>

                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Category:</label>
                    <input className="text-black border border-gray-200 rounded-md"></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Fuel:</label>
                    <input className="text-black border border-gray-200 rounded-md"></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Year:</label>

                    <input className="text-black border border-gray-200 rounded-md"></input>
                  </div>
                  <div className=" flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Model:</label>

                    <input className="text-black border border-gray-200 rounded-md"></input>
                  </div>
                  <div className="flex flex-row justify-around pr-1">
                    <label className="text-black pr-1 font-bold">Seats:</label>
                    <input className="text-black border border-gray-200 rounded-md"></input>
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
                    className="bg-blue-500 text-white background-transparent hover:text-white hover:bg-blue-700 opacity-100 text-xs p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                    complete
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