import React from "react";
import nine86F from "../assets/boxster/986F.jpg";
import nine86B from "../assets/boxster/986B.jpg";
import nine87F from "../assets/boxster/987BoxsterF.jpeg";
import nine87B from "../assets/boxster/987BoxsterB.jpeg";
import nine81F from "../assets/boxster/981BoxsterF.jpg";
import nine81B from "../assets/boxster/981BoxsterB.jpg";
import seven18F from "../assets/boxster/718BoxsterF.jpg";
import seven18B from "../assets/boxster/718BoxsterB.jpg";

export function Boxster() {
  return (
    <section id="boxster">
      <div className="grow relative ">
        <p className="ml-8">Click the generation tag to learn more</p>

        <a href="/986" className="flex justify-center pointer-events-none">
          <span class="pointer-events-auto ">986(1999-2004) </span>
        </a>
        <div className="flex justify-center">
          <img className="m-2" src={nine86F} alt="986 Front" />
          <img className="m-2" src={nine86B} alt="986 Back" />
        </div>
      </div>

      <a href="/TBA" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">987(2005-2012) </span>
      </a>
      <div className="flex justify-center">
        <img className="m-2" src={nine87F} alt="987 Front" />
        <img className="m-2" src={nine87B} alt="987 Back" />
      </div>

      <a href="/TBA" className="flex justify-center pointer-events-none">
        <span class="pointer-events-auto ">981(2013-2016) </span>
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
