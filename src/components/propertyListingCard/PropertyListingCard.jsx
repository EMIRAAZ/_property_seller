import React from "react";
import Whatsapp from "../svg/whatsapp";
import Phone from "../svg/phone";
import Bath from "../svg/bath";
import { Bedroom, LocationIcon } from "../svgicons";

function PropertyListingCard() {
  return (
    <div className="flex h-[290px]  border-stone-400 border-solid border w-[870px] rounded-10px overflow-hidden">
      <div className="w-[360px] h-full">
        <img
          className="w-full h-full object-cover"
          src="/assets/image/propertyimage.png"
          alt=""
        />
        <div className=""></div>
      </div>
      <div className="flex-1 mx-7 mt-7">
        <div className=" flex justify-between mb-4">
          <span className="text-[14px] text-[#545454]">Apartment</span>
          <span className="text-[14px] text-[#545454]">Listed 4 Days Ago</span>
        </div>
        <div className="mb-4 text-[20px] font-medium">
          <h1>1bhk Apartment for Sale in AI</h1>
        </div>
        <div className="mb-4 text-[18px] font-semibold">
          <p>AED 1000,0000</p>
        </div>
        <div className="flex mb-3 items-center">
          <LocationIcon />
          <span className="text-[14px] text-[#545454]">
            Terra Nova, Arabian Ranches, Dubai
          </span>
        </div>
        <div className="flex w-full justify-between mb-3">
          <div className="flex ">
            <div className="flex items-center gap-2  me-4">
              <Bedroom />
              <span className="text-[14px] text-[#545454]">2</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath fill="#000" />
              <span className="text-[14px] text-[#545454]">2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#545454]">1883.14 sqft</span>
          </div>
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-1 text-[#000] font-medium bg-[#D2D2D2] px-2 py-2 text-[13px] rounded-[4px] gap-3 justify-center items-center">
            <Phone fill="#000" />
            <span>Rquest callback</span>
          </div>
          <div className="flex flex-1 text-[#000] font-medium bg-[#D2D2D2] px-2 py-2 text-[13px] rounded-[4px] gap-3 justify-center items-center">
            <Whatsapp fill="#000" />
            <span>WhatsaApp callback</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyListingCard;
