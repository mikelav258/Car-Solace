import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Details } from "./Details";
import { Boxster } from "./Boxster";
import { Carerra } from "./Carerra";
import { Cayman } from "./Cayman";
import { Nine93 } from "./Nine93";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
