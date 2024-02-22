import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { LeftArrowIcon } from "../../../components/svgicons";
import Close from "../../../components/svg/close";
// import Close from "../../../components/svg/close";
// import CloseSvg from "../../../../public/assets/pic/";

function HomeBanner(props) {
  const { children, stateForButton, handleClickSearch } = props;

  return (
    <div className="home-banner">
      <div className="mobile-shade"></div>
      <div className="home-banner-container relative">
        {stateForButton && (
          <div className="relative">

            <div
              className="cursor-pointer banner-left-arrow hidden sm:block "
              onClick={() => handleClickSearch(false)}
            >
              <LeftArrowIcon />
            </div>
            <div onClick={()=>handleClickSearch(false)} className=" block sm:hidden  fixed bottom-3 left-0 z-[1000] h-[100px] w-full">
              {/* <div className="z-[100] absolute top-6 left-9 " style={{color:"red"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, architecto quia. Tempore, sint consequuntur, incidunt eligendi atque molestiae animi rerum dolorum impedit totam, voluptate reprehenderit numquam quidem aperiam. Nam, temporibus?</div> */}
              <div className="absolute w-full z-50 flex flex-col justify-end items-center h-[95%] gap-6  ">
                <div
                  style={{ border: "1px solid rgb(0 0 0 / 66%)" }}
                  className=" border-solid  rounded-20px w-fit p-3 "
                >
                  <Close />
                </div>
              </div>
              <div
                style={{ backgroundColor: "rgba(255, 255, 255, 60%)" }}
                className=" blur-2xl w-full h-[50%]"
              ></div>
            </div>
          </div>
        )}
        {<img src="/assets/image/home-bg.png" alt="" />}
        <div className="overlap-shade"></div>
      </div>
      <div className="home-banner-content">{children}</div>
    </div>
  );
}

export default HomeBanner;
