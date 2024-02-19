import React from "react";
import Whatsapp from "../svg/whatsapp";
import Phone from "../svg/phone";
import Bath from "../svg/bath";
import { Bedroom, LocationIcon } from "../svgicons";

function PropertyListingCard() {
  return (
    <div className="flex h-[250px]  border-stone-400 border-solid border w-[870px] rounded-10px overflow-hidden">
      <div className="w-[360px] h-full relative">
        <img
          className="w-full h-full object-cover"
          src="/assets/image/propertyimage.png"
          alt=""
        />
        <div className=" flex justify-between top-0 left-0 right-0 px-3 py-3  absolute h-auto">
          <div className=" flex flex-col gap-1">
            <div className="py-1 px-3 flex gap-2 bg-black text-white">
              <img
                className="w-3"
                src="/assets/image/light-listing.svg"
                alt=""
              />
              <p className="text-[10px]">New Listing</p>
            </div>
            <div className="p-1 flex gap-2 bg-white text-black">
              <img
                className="w-3"
                src="/assets/image/light-listing.svg"
                alt=""
              />
              <p className="text-[10px]">New Listing</p>
            </div>
          </div>
          <div className="bg-white w-auto rounded-[6px] h-8 flex items-center">
            <img
              className=""
              src="/public/assets/image/dark-share.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full justify-between px-3 items-center absolute top-0 left-0 right-0 bottom-0 ">
          <div className="bg-white flex justify-center items-center px-3 py-1 rounded-[30px]">
            <span className="text-[14px] font-bold"> &lt;</span>
          </div>
          <div className="bg-white flex justify-center items-center px-3 py-1 rounded-[30px]">
            <span className="text-[14px] font-bold"> &gt;</span>
          </div>
          <div className="absolute bottom-2 gap-1 left-0 items-center flex justify-center right-0 h-4 ">
            <span className="bg-white hover:w-3 hover:h-3  w-2 h-2 block rounded-[100%]"></span>
            <span className="bg-white hover:w-3 hover:h-3  w-2 h-2 block rounded-[100%]"></span>
            <span className="bg-white hover:w-3 hover:h-3  w-2 h-2 block rounded-[100%]"></span>
            <span className="bg-white hover:w-3 hover:h-3  w-2 h-2 block rounded-[100%]"></span>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="flex-1 mx-7 mt-5">
        <div className=" flex justify-between mb-3">
          <span className="text-[14px] text-[#545454]">Apartment</span>
          <span className="text-[14px] text-[#545454]">Listed 4 Days Ago</span>
        </div>
        <div className="mb-3 text-[20px] font-medium">
          <h1>1bhk Apartment for Sale in AI</h1>
        </div>
        <div className="mb-3 text-[18px] font-semibold">
          <p>AED 1000,0000</p>
        </div>
        <div className="flex mb-2 items-center">
          <LocationIcon />
          <span className="text-[14px] text-[#545454]">
            Terra Nova, Arabian Ranches, Dubai
          </span>
        </div>
        <div className="flex w-full justify-between mb-2">
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
