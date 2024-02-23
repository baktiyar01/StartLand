import React from "react";
import dot from "../../img/icons/dot.svg";
import logo from "../../img/background/logo1.svg";
function Header() {
  return (
    <header className=" container mx-auto py-4 px-2 ">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-baseline">
          <img src={logo} alt="logo" />
          <img src={dot} alt="Dot" />
        </span>
      </div>
    </header>
  );
}

export default Header;
