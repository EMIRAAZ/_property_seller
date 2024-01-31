import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { LeftArrowIcon } from "../../../components/svgicons";

function HomeBanner(props) {
  const { children, stateForButton, handleClickSearch } = props;

  return (
    <div className="home-banner">
      <div className="mobile-shade"></div>
      <div className="home-banner-container">
        {stateForButton && (
          <div className="cursor-pointer banner-left-arrow" onClick={()=>handleClickSearch(false)}>
            <LeftArrowIcon />
          </div>
        )}
        {  <img src="/assets/image/home-bg.png" alt="" />}
        <div className="overlap-shade"></div>
      </div>
      <div className="home-banner-content">{children}</div>
    </div>
  );
}

export default HomeBanner;
