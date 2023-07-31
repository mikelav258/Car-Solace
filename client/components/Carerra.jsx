import React from "react";
import nine93F from "../assets/993F.jpg";
import nine93B from "../assets/993B.jpg";
import nine96F from "../assets/996F.jpeg";
import nine96B from "../assets/996B.jpeg";
import nine97F from "../assets/997F.jpg";
import nine97B from "../assets/997B.jpg";
import nine91F from "../assets/991F.jpg";
import nine91B from "../assets/991B.jpg";
import nine92F from "../assets/992F.jpg";
import nine92B from "../assets/992B.jpg";

export function Carerra() {
  return (
    <section id="carerra">
      <div className="grow relative ">
        <p className="ml-8">Click the generation tag to learn more</p>

        <a href="/993" className="flex justify-center pointer-events-none">
          <span class="pointer-events-auto ">993(1994-1998) </span>
        </a>
        <div className="flex justify-center">
          <img className="m-2" src={nine93F} alt="993 Front" />
          <img className="m-2" src={nine93B} alt="993 Back" />
        </div>
      </div>

      <a href="/996" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">996(1999-2004) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine96F} alt="996 Front" />
        <img className="m-2" src={nine96B} alt="996 Back" />
      </div>

      <a href="/997" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">997(2004-2012) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine97F} alt="997 Front" />
        <img className="m-2" src={nine97B} alt="997 Back" />
      </div>

      <a href="/991" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">991(2012-2019) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine91F} alt="991 Front" />
        <img className="m-2" src={nine91B} alt="991 Back" />
      </div>

      <a href="/992" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">992(2020-Current) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine92F} alt="992 Front" />
        <img className="m-2" src={nine92B} alt="992 Back" />
      </div>
    </section>
  );
}
