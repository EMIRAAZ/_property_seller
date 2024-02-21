import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./route";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white w-full h-screen bg-black">
    <div className="w-[350px] h-[100vh] sm:flex sm:justify-center sm:justify-center sm:m-auto sm:w-[600px]">
    <img className="object-contain w-full h-full" src="/assets/image/propertyselle_Logo.jpeg" />
    </div>
  </div>
  // <Provider store={store()}>
  //   <SkeletonTheme baseColor="#202020" highlightColor="#444">
  //     <Router />
  //   </SkeletonTheme>
  // </Provider>
);
