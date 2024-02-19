import React from "react";

function AdsBanner() {
  return (
    <div className="">
      <div className="rounded-10px overflow-hidden w-[277px] mb-7 h-[500px]">
        <img
          className="w-full h-full object-cover"
          src="/assets/image/ads1.svg"

          alt=""
        />
      </div>
      <div className="rounded-10px overflow-hidden w-[277px] h-[500px]">
        <img
          className="w-full h-full object-cover"
          src="/assets/image/ads1.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdsBanner;
