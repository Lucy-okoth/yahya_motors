import React, { useEffect, useState } from "react";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams, Link } from "react-router-dom";
function SingleOne() {
  const [carData, setCarData] = useState({});
  let carid = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/cars/${carid.id}`)
      .then((response) => response.json())
      .then((data) => setCarData((carData) => data));
  }, []);
  return (
    <div className="h-screen w-11/12 m-auto p-2">
        <p className="h-6 bg-red-600">
        <marquee>
      This is a cool 🚖🚀 🚀  {`${carData.category} ${carData.model} 🔥🔥🔥${carData.year}`}
      </marquee>
        </p>
        <div className="ml-3 h-20 text-white py-2 py-auto">
        <img
          className="h-12"
          src={carData.front_url}
          alt={carData.model}
        />
      </div>
     
      <div className="grid grid-cols-4 gap-2">
        <div className="p-4 col-span-4 sm:col-span-3">{`${carData.year} ${carData.category} ${carData.model}`}</div>
        <div className="p-4 sm:col-span-1">Price:${carData.price}</div>
      </div>
      <div className="w-full h-full grid grid-cols-3 gap-2">
        <div className="border border-slate-100 col-span-4 sm:col-span-2">
          <Carousel>
            <div >
              <img alt={carData.model} src={carData.front_url} />
            </div>
            <div>
              <img alt={carData} src={carData.inside_url} />
            </div>
            <div>
              <img alt={carData.model} src={carData.back_url} />
            </div>
            <div>
              <img alt={carData.model} src={carData.side_url} />
            </div>
          </Carousel>
        </div>
        <div className="col-span-4 sm:col-span-1 py-6 py-auto">
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3 pb-3">Category:</span>
            <span>{carData.category}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Model:</span>
            <span>{carData.model}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Price:</span>
            <span>${carData.price}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Seats:</span>
            <span>{carData.seats}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Transmission:</span>
            <span>{carData.transmission}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Year:</span>
            <span>{carData.year}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">Fuel:</span>
            <span>{carData.fuel_type}</span>
          </div>
          <div className="border border-slate-400 justify-between rounded-md">
            <span className="ml-3 mr-3">In Stock:</span>
            <span>{carData.quantity}</span>
          </div>
          <Link
            className="block bg-sky-600 p-2 text-center hover:bg-blue-700 w-auto rounded-md shadow-md mt-5"
            to={`/cars/${carData.category}`}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleOne;
