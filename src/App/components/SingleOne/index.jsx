import React, { useEffect, useState } from "react";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams, Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
function SingleOne() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [carData, setCarData] = useState({});
  const [reviews,setReviews] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  let carid = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/cars/${carid.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCarData((carData) => data)
      setReviews(reviews=>data.reviews)
      });
  }, []);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleReview(e) {
    e.preventDefault();
    const review = {
      email: formData.email,
      comment: formData.comment,
      rating: ratingValue,
      car_id: parseInt(carid.id),
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(-1 + 1);
      });
  }

 

 let star =<svg
 aria-hidden="true"
 focusable="false"
 data-prefix="fas"
 data-icon="star"
 class="text-yellow-500 mr-1 w-4"          
 role="img"
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 576 512">
 <path
   fill="currentColor"
   d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
</svg>


  // const newReview = reviews.sort((a,b)=>a.created_at > a.created_at)

  const reviewList =reviews.map((item) => (
    <li key={item.id} className="w-76 rounded-lg shadow-lg h-auto   bg-sky-300 mb-3 p-4">
      <span className=" border-2 p-1 border-white bg-slate-300 rounded-full">{item.email.charAt(0).toUpperCase()}</span><span>{item.email}</span>
     <hr></hr>
      <span><b>comment: </b><i className="text-orange-700">{item.comment}</i></span><br></br>
      <span className="flex flex-row"><i>rating: </i>{star}{item.rating}</span>
    </li>
  ))


  return (
    <div className="h-screen w-11/12 m-auto p-2">
      <p className="h-6 bg-red-600">
        <marquee>
          This is a cool 🚖🚀 🚀{" "}
          {`${carData.category} ${carData.model} 🔥🔥🔥${carData.year}`}
        </marquee>
      </p>
      <div className="ml-3 h-20 text-white py-2 py-auto">
        <img className="h-12" src={carData.front_url} alt={carData.model} />
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="p-4 col-span-4 sm:col-span-3">{`${carData.year} ${carData.category} ${carData.model}`}</div>
        <div className="p-4 sm:col-span-1">Price:${carData.price}</div>
      </div>
      <div className="w-full h-auto grid grid-cols-3 gap-2">
        <div className="border border-slate-100 col-span-4 sm:col-span-2">
          <Carousel>
            <div>
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
          <button
            className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 mt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}>
            review
          </button>

          <button
            className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 mt-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal2(!showModal2)}>
            <span className="mr-0 text-red-600 text-2xl">{reviews.length}</span> reviews
          </button>

          {showModal2 ? (
            <div>
              <ul>{reviewList}</ul>
            </div>
          ) : null}

          {showModal ? (
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">
                      Leave a comment and rating
                    </h3>
                    <button
                      className="bg-transparent border-0 text-black float-center"
                      onClick={() => setShowModal(false)}>
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      onSubmit={(e) => handleReview(e)}
                      className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        Email
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        name="email"
                        required
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        comment
                      </label>
                      <input
                        onChange={(e) => handleChange(e)}
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        name="comment"
                        required
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        rating out of 5
                      </label>
                      <Rating
                        ratingValue={ratingValue}
                        setRatingValue={setRatingValue}
                      />

                      <button
                        className="font-bold px-6 py-3 mt-3 rounded shadow hover:shadow-lg bg-blue-400"
                        type="submit">
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SingleOne;
