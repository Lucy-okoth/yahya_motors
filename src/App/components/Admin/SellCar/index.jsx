import React, { useState } from "react";

function SellCar() {
  const [sales, setSales] = useState({});

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setSales({ ...sales, [name]: value });
  }

  function allData() {
    console.log(sales);
  }
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-screeen h-screen">
      <h1 className="text-center p-auto">Sell Car</h1>
      <form className="p-2 p-auto m-auto grid sm:grid-cols-1 sm:w-2/3">
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
            name="car_id"
          />
        </div>
        <div className="flex flex-col">
          <button
            onClick={allData}
            className="bg-blue-700 hover:bg-blue-800 w-36 text-white rounded-md"
            type="button"
            data-modal-toggle="popup-modal">
            view transaction
          </button>
        </div>
      </form>

      
    </div>
  );
}

export default SellCar;
