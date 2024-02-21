import React from "react";
import "./index.css";

function Banner() {
  return (
    <>
      <div className="desktop-banner bg-black text-white flex flex-wrap overflow-hidden rounded-20px h-[260px] m-auto w-[90%]">
        <div className="flex-1 bg- flex items-center justify-center">
          <div className="w-[85%] flex flex-col gap-3">
            <h1 className=" text-30px">
              Find Your Dream Home Today
            </h1>
            <p className="text-18px">
              Explore our curated collection of exquisite properties for sale
              and discover the perfect place to call home.
            </p>
            <button
              style={{ width: "fit-content" }}
              className="rounded-10px bg-white  flex text-[#141111] text-center font-semibold font-poppins text-xs w-90-per py-3 px-5 justify-center items-center gap-5"
            >
              View all properties
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-full relative ">
          <div className="banner-shade-left w-full h-full absolute"></div>
          <img
            className="w-full h-full object-cover"
            src="/assets/pic/luxury-banner.jpeg"
            alt=""
          />
        </div>
      </div>

      {/* <div className="flex flex-wrap overflow-hidden rounded-20px h-[223px] m-auto w-[90%]">
        <div className="flex-1 w-full h-full relative ">
          <div className="banner-shade-left w-full h-full absolute"></div>
          <img
            className="w-full h-full object-cover"
            src="/assets/pic/luxury-banner.jpeg"
            alt=""
          />
        </div>
        <div className="flex-1 bg-pure-black flex items-center justify-center">
          <div className="w-[90%] flex flex-col gap-3">
            <h1 className="text-pure-white text-30px">
              Find Your Dream Home Today
            </h1>
            <p className="text-pure-white text-18px">
              Explore our curated collection of exquisite properties for sale
              and discover the perfect place to call home.
            </p>
            <button
              style={{ width: "fit-content" }}
              className="rounded-10px bg-pure-white flex text-pure-black text-center font-semibold font-poppins text-xs w-90-per py-3 px-5 justify-center items-center gap-5"
            >
              View all properties
            </button>
          </div>
        </div>
      </div>
       */}

      <div className="mobile-banner-main-container">
        <div className="mobile-banner-image-container">
          <div className="mobile-screen-shade"></div>
          <div className="" style={{width:"100%",height:"240px"}}>
            <img
              className="w-full h-full object-cover"
              src="/assets/pic/luxury-banner.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="mobile-banner-content-container">
          <h1 className=" text-white text-30px">
            {" "}
            Find Your Dream Home Today{" "}
          </h1>
          <p className=" text-white text-18px">
            Explore our curated collection of exquisite properties for sale and
            discover the perfect place to call home.
          </p>
          <button
            style={{ width: "fit-content" }}
            className="rounded-10px bg-pure-white flex text-[13px] bg-[#fff] text-[#000] text-center font-semibold font-poppins text-xs w-90-per py-3 px-5 justify-center items-center gap-5"
          >
            View all properties
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
