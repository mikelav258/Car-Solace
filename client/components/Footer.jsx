import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const Footer = () => {
  return (
    <nav className="relative w-full p-8 text-white xl:max-w-10xl">
      <div className="flex items-center justify-between">
        <div className="flex item-center">
          <Link to="/">
            <img className="logo" src={Logo} alt="Porsche Logo" />
          </Link>
        </div>
        <div className="flex item-center font-light space-x-5 ">
          <Link to="/carerra">
            <a className="hover:underline underline-offset-8 decoration-lightblue">
              Carerra
            </a>
          </Link>
          <Link to="/boxster">
            <a className="hover:underline underline-offset-8 decoration-lightblue">
              Boxster
            </a>
          </Link>
          <Link to="/cayman">
            <a className="hover:underline underline-offset-8 decoration-lightblue">
              Cayman
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
