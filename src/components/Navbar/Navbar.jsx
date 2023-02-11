import React from "react";
import Logo from "../../assets/Rick_and_Morty.svg";
import SecondLogo from "../../assets/rickmorty.png";

function Navbar() {
  return (
    <div className="py-2 flex items-center justify-between border-b-2 px-2 md:px-0 border-green-400">
      <img src={Logo} alt="logo" width={160} height={160} className="mr-auto" />
      <div className="flex items-center">
        <img src={SecondLogo} alt="logo" width={60} height={60} />
        <span className="text-2xl font-bold"> : 826</span>
      </div>
    </div>
  );
}

export default Navbar;
