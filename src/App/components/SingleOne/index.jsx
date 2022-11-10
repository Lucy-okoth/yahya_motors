
import React from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function SingleOne() {
  return (
    <div className="h-screen w-11/12 m-auto p-2">
      <p className="h-6 bg-red-600"></p>
      <div className="ml-3 h-20 text-white py-2 py-auto">
        <img
          tabindex="0"
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
              
              <img  alt="hundra" src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/0bd9883bddfbd5e79439a2afa370abeb.jpg" />
           
            </div>
            <div>
              <img
               alt="hundra"
                src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/5d9dc734fe507839658839858399088f.jpg"
              />
            
            </div>
            <div>
            alt="hundra"
              <img  alt="hundra" src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/8b081af12af2f7e6deae02b06ca6aa5c.jpg" />
            
            </div>
            <div>
              <img  alt="hundra" src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/77ef7514ae071564e649118f9a3f0b0d.jpg" />
           
            </div>
            <div>
              <img  alt="hundra" src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/e74bbf90e9477e6e983dc2cb94bc66e6.jpg" />
            
            </div>
            <div>
              <img  alt="hundra" src="https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/ah8zvDvNMRgU/5TFJA5DA9NX052226/241e746056f233073307679f481d3a30.jpg" />
            </div>
          </Carousel>
        </div>
        <div className="col-span-4 sm:col-span-1 py-6 py-auto">
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3 pb-3">Category:</span><span>Toyota</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Model:</span><span>Hundra</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Price:</span><span>$56000</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Seats:</span><span>5</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Transmission:</span><span>Manual</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Year:</span><span>2022</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">Fuel:</span><span>Diesel</span></div>
          <div className="border border-slate-400 justify-between rounded-md"><span className="ml-3 mr-3">In Stock:</span><span>Diesel</span></div>
         
        </div>
      </div>
    </div>
  );
}

export default SingleOne;
