import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Home() {
  const navigate = useNavigate();
  const handleCarerra = () => navigate("/carerra");
  const handleBoxster = () => navigate("/boxster");
  const handleCayman = () => navigate("/cayman");

  return (
    <>
      <div className="flex flex-col justify-center items-center m-20">
        <h1 className="">
          <span id="span1">C</span>ar <span id="span2">S</span>olace
        </h1>
        <p className="m-8">Select the model</p>
        <div className="">
          <button onClick={handleCarerra}> Carerra</button>
          <button onClick={handleBoxster}> Boxster</button>
          <button onClick={handleCayman}> Cayman</button>
        </div>
        <div>
          <p className="m-5">
            Not Sure What You Want?
            <Link to={"/Details"}>
              <span> Click me</span>
            </Link>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
