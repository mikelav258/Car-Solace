import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Details } from "./Details";
import { Boxster } from "./Boxster";
import { Carerra } from "./Carerra";
import { Cayman } from "./Cayman";
import { Nine93 } from "./Nine93";
import { Nine96 } from "./Nine96";
import { Nine97 } from "./Nine97";
import { Nine91 } from "./Nine91";
import { Nine92 } from "./Nine92";

import "./index.scss";
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <div className="m-0 p-0 bg-background flex flex-col w-full xl:pl-16 xl:pr-16">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/boxster" element={<Boxster />} />
          <Route path="/carerra" element={<Carerra />} />
          <Route path="/cayman" element={<Cayman />} />
          <Route path="/993" element={<Nine93 />} />
          <Route path="/996" element={<Nine96 />} />
          <Route path="/997" element={<Nine97 />} />
          <Route path="/991" element={<Nine91 />} />
          <Route path="/992" element={<Nine92 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
