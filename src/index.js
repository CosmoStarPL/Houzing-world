import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { QueryClient, QueryClientProvider } from "react-query";

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  </div>
);
