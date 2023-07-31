import React from "react";
import nine92F from "../assets/992F.jpg";
import nine92B from "../assets/992B.jpg";

export function Nine92() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>992 Common Models</p>
      <p>Coupe( Carerra(S), T, 4(S), GTS, Turbo(S) )</p>
      <p>Cabriolet( Carerra(S), 4(S), GTS, Turbo(S) )</p>
      <p>Targa( 4(S), GTS )</p>
      <div className="flex">
        <img className="m-2" src={nine92F} alt="992 Front" />
        <img className="m-2" src={nine92B} alt="992 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
