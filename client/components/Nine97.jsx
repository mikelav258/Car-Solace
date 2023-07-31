import React from "react";
import nine97F from "../assets/997F.jpg";
import nine97B from "../assets/997B.jpg";

export function Nine97() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>997 Common Models</p>
      <p>Coupe( Carerra(S), 4(S), Turbo )</p>
      <p>Cabriolet( Carerra(S), 4(S), Turbo )</p>
      <div className="flex">
        <img className="m-2" src={nine97F} alt="997 Front" />
        <img className="m-2" src={nine97B} alt="997 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
