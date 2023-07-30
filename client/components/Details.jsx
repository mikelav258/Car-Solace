import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Details() {
  const navigate = useNavigate();
  function homePage() {
    navigate("/");
  }
  return (
    <>
      {/* <Navbar /> */}
      <div class="Carerra flex flex-col justify-center items-center">
        <h2 class="text-center">911 Carerra</h2>
        <p class="text-center">
          Rear-engine based 2 + 2 coupe
          <br />
          Introduced in 1964, the 911 also known as Carerra, has been an iconic
          sports car for Porsche
          <br />
          The 911 can be split into 2 categories: Air-Cooled(1964-1998) |
          Water-Cooled(1999-Present)
          <br />
          Currently the brand's flagship model
        </p>
      </div>
      <div class="Boxster flex flex-col justify-center items-center">
        <h2>Boxster</h2>
        <p>Mid-engine 2 seater convertible</p>
        <p>
          Introduced in 1996, the Boxster was a more entry-level vehicle into
          the brand
        </p>
      </div>
      <div class="Cayman flex flex-col justify-center items-center">
        <h2>Cayman</h2>
        <p>Mid-engine 2 seater coupe</p>
        <p>
          Introduced in 2005, the Cayman was the coupe sibling of the boxster
        </p>
      </div>
    </>
  );
}
