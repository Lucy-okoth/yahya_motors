import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SellCar() {
  const [sales, setSales] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
  const [update, setUpdate] = useState(false);
  const navigation = useNavigate();
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setSales({ ...sales, [name]: value });
  }

  function handlePost() {
    console.log(sales);
    console.log(car);
    const dataToDb = {
      buyer_email: sales.buyer_email,
      buyer_name: sales.buyer_name,
      category: car.category,
      price: car.price,
      model: car.model,
    };
    fetch("http://localhost:9292/sell_car", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataToDb),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`${data.name} Thanks for purchasing a car`);
        setUpdate((update) => !update);
        setShowModal(false);
        navigation("/admin/view_car");
      });
  }

  function handleTransaction() {
    if (sales.buyer_name.length < 1 || sales.buyer_email < 1 || car.model < 1) {
      alert("the input fields cannot be empty");
      setShowModal(false);
    } else {
      const filtered = cars.find((item) => item.model === sales.car_model);
      setCar((car) => filtered);
      console.log(sales);
      console.log(car);
      setShowModal(true);
    }
  }

  useEffect(() => {
    fetch("http://localhost:9292/cars")
      .then((data) => data.json())
      .then((data) => setCars(data));
  }, [update]);

  // const mercedes = cars.filter((item) => {return item.model ===sales.car_model})

  return (
    <div className="bg-hero mt-8 h-screen">
      <form className="p-2 mt-16 p-auto m-auto grid sm:grid-cols-1 sm:w-2/3 text-black">
        <h1 className="text-center text-4xl">Sell Car</h1>
        <div className="flex flex-col">
          <label>Buyer Name</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md border border-slate-300"
            type="text"
            name="buyer_name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Buyer Email</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md border border-slate-300"
            type="text"
            name="buyer_email"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>car_model</label>
          <input
            onChange={(e) => handleChange(e)}
            className="rounded-md border border-slate-300"
            type="text"
            name="car_model"
            required
          />
        </div>
        <div className="flex flex-col">
          <button
            className="bg-black text-white active:bg-sky-600 font-bold  text-xs px-3 py-3 rounded-md shadow hover:bg-gray-400 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={handleTransaction}>
            Process Transaction
          </button>
        </div>
      </form>
      <div className="sm:w-2/3 flex sm:flex-row row-wrap m-auto mb-3 p-uto">
        <input
          className="rounded-md border border-slate-300"
          type="text"
          name="car_model"
          required
        />
        <button className="ml-3 p-1 hover:bg-sky-600 flex flex-row border rounded-md">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
         <span>Search</span>
        </button>
      </div>
      <div className="sm:w-2/3 w-full p-2 p-auto m-auto border">
        <table className="w-full">
          <thead className="justify-around flex flex-row m-auto">
            <tr>Category</tr>
            <tr>Model</tr>
            <tr>Fuel</tr>
            <tr>Transmission</tr>
            <tr>year</tr>
            <tr>price</tr>
            <tr>select</tr>
          </thead>
          <tbody>
            <hr></hr>
            <hr></hr>
            <tr className="justify-around flex flex-row m-auto">
              <td>subaru</td>
              <td>impreza</td>
              <td>petrol</td>
              <td>transmission</td>
              <td>year</td>
              <td>price</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <hr></hr>
            <tr className="justify-around flex flex-row m-auto">
              <td>subaru</td>
              <td>impreza</td>
              <td>petrol</td>
              <td>transmission</td>
              <td>year</td>
              <td>price</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <hr></hr>
            <tr className="justify-around flex flex-row m-auto">
              <td>subaru</td>
              <td>impreza</td>
              <td>petrol</td>
              <td>transmission</td>
              <td>year</td>
              <td>price</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                    <span className="text-white">Customer Name:</span>
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {sales.buyer_name}
                    </span>
                  </div>

                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    <span className="text-white pr-1">Customer Email:</span>
                    <span className="text-white border-2 border-gray-200 rounded-md">
                      {sales.buyer_email}
                    </span>
                  </div>
                  <div className="text-white bg-theme flex flex-row justify-around pr-1">
                    <span className="text-white pr-1">Car Category:</span>
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
                    onClick={handlePost}>
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
