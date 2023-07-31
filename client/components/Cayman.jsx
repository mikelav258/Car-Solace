import React from "react";
import nine87F from "../assets/cayman/987CaymanF.jpg";
import nine87B from "../assets/cayman/987CaymanB.jpg";
import nine81F from "../assets/cayman/981CaymanF.jpg";
import nine81B from "../assets/cayman/981CaymanB.jpg";
import seven18F from "../assets/cayman/718CaymanF.jpg";
import seven18B from "../assets/cayman/718CaymanB.jpg";

export function Cayman() {
  return (
    <section id="carerra">
      <div className="grow relative ">
        <p className="ml-8">Click the generation tag to learn more</p>

        <a href="/TBA" className="flex justify-center pointer-events-none">
          <span class="pointer-events-auto ">987(2005-2012) </span>
        </a>
        <div className="flex justify-center">
          <img className="m-2" src={nine87F} alt="987 Front" />
          <img className="m-2" src={nine87B} alt="987 Back" />
        </div>
      </div>

      <a href="/TBA" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">981(2014-2016) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine81F} alt="981 Front" />
        <img className="m-2" src={nine81B} alt="981 Back" />
      </div>

      <a href="/TBA" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">718(2017-Current) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={seven18F} alt="718 Front" />
        <img className="m-2" src={seven18B} alt="718 Back" />
      </div>
    </section>
  );
}
