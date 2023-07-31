import React from "react";
import nine96F from "../assets/996F.jpeg";
import nine96B from "../assets/996B.jpeg";

export function Nine96() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>996 Common Models</p>
      <p>Coupe( Carerra(S), 4(S), Turbo )</p>
      <p>Cabriolet( Carerra(S), 4(S), Turbo )</p>
      <div className="flex">
        <img className="m-2" src={nine96F} alt="993 Front" />
        <img className="m-2" src={nine96B} alt="993 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
