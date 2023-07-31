import React from "react";
import nine91F from "../assets/991F.jpg";
import nine91B from "../assets/991B.jpg";

export function Nine91() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>991 Common Models</p>
      <p>Coupe( Carerra(S), T, 4(S), GTS, Turbo(S) )</p>
      <p>Cabriolet( Carerra(S), 4(S), GTS, Turbo(S) )</p>
      <p>Targa( 4(S), GTS )</p>
      <div className="flex">
        <img className="m-2" src={nine91F} alt="991 Front" />
        <img className="m-2" src={nine91B} alt="991 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
