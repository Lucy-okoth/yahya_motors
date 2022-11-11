import React from "react";
import {Link} from "react-router-dom"
function Cars() {
  const div = "cols-span-1 md:cols-span-2 shadow-lg flex flex-col h-auto bg-gradient-to-r from-gray-500 via-slate-200 to-gray-500 items-center bg-gray-300 rounded py-auto"
  return (
    <div className="grid grid-cols-2 bg-gray-100 gap-4 m-6">
      <div className={div}>
        <div className=" text-center p-3">Nissan</div>
        <div className="p-3">
        <img className="h-14 justify-center"src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/700px-Nissan_logo.png?20200715092107" alt="logo"/>
        </div>
        <div className="p-3">
        <Link to="/cars/nissan" className= "bg-blue-500 rounded-sm text-white">Explore</Link>
        </div>
      </div>
      <div className={div}>
        <div className=" text-center p-3">BMW</div>
        <div className="p-3">
        <img className="h-14 justify-center"src="https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_960_720.png" alt="logo"/>
        </div>
        <div className="p-3">
        <Link to="/cars/bmw" className= "bg-blue-500 rounded-sm text-white">Explore</Link>
        </div>
        </div>
      <div className={div}>
        <div className=" text-center p-3">Mercedes</div>
        <div className="p-3">
        <img className="h-14 justify-center"src="https://i.pinimg.com/originals/86/0d/26/860d2666caf66420dffeeb98a1662f74.jpg" alt="logo"/>
        </div>
        <div className="p-3">
        <Link to="/cars/mercedes" className= "bg-blue-500 rounded-sm text-white">Explore</Link>
        </div>
      </div>
      <div className={div}>
        <div className=" text-center p-3">Subaru</div>
        <div className="p-3">
        <img className="h-14 justify-center"src="https://mcdn.wallpapersafari.com/medium/52/35/J4q0hX.jpg" alt="logo"/>
        </div>
        <div className="p-3">
        <Link to="/cars/subaru" className= "bg-blue-500 rounded-sm text-white">Explore</Link>
        </div>
      </div>
      <div className={div}>
        <div className=" text-center p-3">Toyota</div>
        <div className="p-3">
        <img className="h-14 justify-center"src="https://m.media-amazon.com/images/I/41eeJcMzpxL._SY300_SX300_QL70_FMwebp_.jpg" alt="logo"/>
        </div>
        <div className="p-3">
        <Link to="/cars/toyota" className= "bg-blue-500 rounded-sm text-white">Explore</Link>
        </div>
      </div>
    </div>
  )
}
export default Cars;