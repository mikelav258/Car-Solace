import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar } from "./Navbar";

export function Cayman() {
  const navigate = useNavigate();
  function handleDetails() {
    navigate("/SedanDetails");
  }
  function homePage() {
    navigate("/");
  }

  return (
    <>
      <div>
        <h1 className="flex justify-center">Incoming Feature</h1>
      </div>
    </>
  );
}
