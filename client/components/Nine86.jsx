import React from "react";
import nine86F from "../assets/boxster/986F.jpg";
import nine86B from "../assets/boxster/986B.jpg";

export function Nine86() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>986 Models</p>
      <p>Boxster(S)</p>
      <div className="flex">
        <img className="m-2" src={nine86F} alt="993 Front" />
        <img className="m-2" src={nine86B} alt="993 Back" />
      </div>
      <p>
        Incoming Information regarding pricing, performance, and options are
        TBA. Stay Tuned!
      </p>
    </div>
  );
}
