import React, { useState } from "react";

function SellCar() {
  const [sales, setSales] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setSales({ ...sales, [name]: value });
  }

  function allData() {
    setShowModal(true);
    console.log(sales);
  }

  function handleTransaction() {
    console.log(car);
    console.log(sales);
    setShowModal(false);
  }

  const car = {
    category: "Subaru",
    model: "impreza",
    price: 1200000,
    transmission: "manual",
    fuel: "petrol",
  };

  return (
    <div className="bg-hero w-screeen h-screen">
      <h1 className="text-center p-auto">Sell Car</h1>
      <form className="p-2 p-auto m-auto grid sm:grid-cols-1 sm:w-2/3 text-black">
        <div className="flex flex-col">
          <label>Buyer Name</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md"
            type="text"
            name="customer_name"
          />
        </div>
        <div className="flex flex-col">
          <label>Buyer Email</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md"
            type="text"
            name="customer_email"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>car_model</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md"
            type="text"
            name="car_model"
          />
        </div>
        <div className="flex flex-col">
          <button
            className="bg-black text-white active:bg-sky-600 font-bold  text-xs px-3 py-3 rounded-md shadow hover:bg-gray-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={allData}>
            Process Transaction
          </button>
        </div>
      </form>
      {showModal ? (
        <>
          <div className="justify-center  bg-theme items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4 ">
            <div className="relative sm:w-3/4 mx-auto">
              {/*content*/}
              <div className="border-0 sm:rounded-lg shadow-lg relative flex flex-col sm:h-3/4 bg-black w-screen sm:w-full  outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h1 className="text-center">Transaction details</h1>
                </div>
                {/*body*/}
                <div className="relative flex-row flex-auto p-3  p-auto m-auto">
                  <div className="text-white bg-theme flex flex-row justify-around">
                    <span className="text-white">
                    Customer Name:
                    </span>
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {sales.customer_name}
                    </span>
                  </div>

                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    <span className="text-white pr-1">
                    Customer Email:
                    </span>
                    <span className="text-white border-2 border-gray-200 rounded-md">
                    {sales.customer_email}
                    </span>
                  </div>
                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    <span className="text-white pr-1">
                    Car Category:
                    </span>
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {car.category}
                    </span>
                  </div>
                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    car transmission:
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    Car Model:
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {car.model}
                    </span>
                  </div>
                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    Car Price:
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {car.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-around p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 bg-red-200 background-transparent px-6 py-2 text-xs rounded p-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 uppercase text-xs p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleTransaction}>
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

export default SellCar;
