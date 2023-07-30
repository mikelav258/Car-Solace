import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar } from "./Navbar";
import nine93F from "../assets/993F.jpg";
import nine93B from "../assets/993B.jpeg";
import nine96F from "../assets/996F.jpeg";
import nine96B from "../assets/996B.jpeg";
import nine97F from "../assets/997F.jpeg";
import nine97B from "../assets/997B.jpeg";
export function Carerra() {
  const navigate = useNavigate();
  function handleDetails() {
    navigate("/SedanDetails");
  }

  return (
    <section id="carerra">
      <div className="grow relative pt-6 md:pt-14">
        <p className="flex justify-center">993(1995-1998)</p>
        <div className="flex justify-center">
          <img className="m-2" src={nine93F} alt="nine93" />
          <img className="m-2" src={nine93B} alt="nine93" />
        </div>
      </div>

      <p className="flex justify-center">996(1999-2004)</p>
      <div className="flex justify-center">
        <img className="m-2" src={nine96F} alt="nine96" />
        <img className="m-2" src={nine96B} alt="nine96" />
      </div>

      <p className="flex justify-center">997(2005-2012)</p>
      <div className="flex justify-center">
        <img className="m-2" src={nine97F} alt="nine97" />
        <img className="m-2" src={nine97B} alt="nine97" />
      </div>

      <p className="flex justify-center">991(2012.5-2019) - Incoming</p>
      <p className="flex justify-center"> 992(2020-Current) - Incoming</p>
    </section>
  );
}
