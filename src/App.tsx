import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

//各分頁
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import SlotMachine from "./pages/SlotMachine";

//樣式

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.scss";
import "material-icons/iconfont/material-icons.css";

export default function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/smallFx/Calendar" element={<Calendar />} />
              <Route path="/smallFx/SlotMachine" element={<SlotMachine />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}
