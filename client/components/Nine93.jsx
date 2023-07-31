import React from "react";
import nine93F from "../assets/993F.jpg";
import nine93B from "../assets/993B.jpg";

export function Nine93() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>993 Models</p>
      <p>Coupe( Carerra, S, 4, 4S, Turbo(S) )</p>
      <p>Cabriolet( S, 4, 4S, Turbo(S) )</p>
      <p>Targa</p>
      <div className="flex">
        <img className="m-2" src={nine93F} alt="993 Front" />
        <img className="m-2" src={nine93B} alt="993 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
