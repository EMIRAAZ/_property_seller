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
  <Provider store={store()}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Router />
    </SkeletonTheme>
  </Provider>
);
