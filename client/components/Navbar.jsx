import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const Navbar = () => {
  // Dropdown list
  const [carerraDrop, setCarerraDrop] = useState(false);
  const [boxsterDrop, setBoxsterDrop] = useState(false);
  const [caymanDrop, setCaymanDrop] = useState(false);

  const openCarerraDrop = () => setCarerraDrop(true);
  const closeCarerraDrop = () => setCarerraDrop(false);
  const openBoxsterDrop = () => setBoxsterDrop(true);
  const closeBoxsterDrop = () => setBoxsterDrop(false);
  const openCaymanDrop = () => setCaymanDrop(true);
  const closeCaymanDrop = () => setCaymanDrop(false);

  return (
    <nav className="relative w-full p-8 text-white xl:max-w-10xl">
      <div className="flex items-center justify-between">
        <div className="flex item-center">
          <Link to="/">
            <img className="logo" src={Logo} alt="Porsche Logo" />
          </Link>
        </div>
        <div className="flex item-center font-light space-x-5 ">
          <div
            className="relative"
            onMouseEnter={openCarerraDrop}
            onMouseLeave={closeCarerraDrop}
          >
            <a
              href="/Carerra"
              className="hover:underline underline-offset-8 decoration-lightblue cursor-pointer"
            >
              Carerra
            </a>
            {carerraDrop && (
              <ul className="absolute top-full left-0 w-40 text-black rounded shadow z-20">
                <li onClick={closeCarerraDrop}>
                  <Link to="/993">993</Link>
                </li>
                <li onClick={closeCarerraDrop}>
                  <Link to="/996">996</Link>
                </li>
                <li onClick={closeCarerraDrop}>
                  <Link to="/997">997</Link>
                </li>
                <li onClick={closeCarerraDrop}>
                  <Link to="/991">991</Link>
                </li>
                <li onClick={closeCarerraDrop}>
                  <Link to="/992">992</Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={openBoxsterDrop}
            onMouseLeave={closeBoxsterDrop}
          >
            <a
              href="/Boxster"
              className="hover:underline underline-offset-8 decoration-lightblue cursor-pointer"
            >
              Boxster
            </a>
            {boxsterDrop && (
              <ul className="absolute top-full left-0 w-40 text-black rounded shadow z-20">
                <li>
                  <Link to="/986">986</Link>
                </li>
                <li>
                  <Link to="/TBA">987</Link>
                </li>
                <li>
                  <Link to="/TBA">981</Link>
                </li>
                <li>
                  <Link to="/TBA">718</Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={openCaymanDrop}
            onMouseLeave={closeCaymanDrop}
          >
            <a
              href="/Cayman"
              className="hover:underline underline-offset-8 decoration-lightblue cursor-pointer"
            >
              Cayman
            </a>
            {caymanDrop && (
              <ul className="absolute top-full left-0 w-40 text-black rounded shadow z-20">
                <li>
                  <Link to="/TBA">987</Link>
                </li>
                <li>
                  <Link to="/TBA">981</Link>
                </li>
                <li>
                  <Link to="/TBA">718</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
