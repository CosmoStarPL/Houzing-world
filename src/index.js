import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./App";
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css'
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </div>
);
